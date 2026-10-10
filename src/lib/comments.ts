// Client logic for <Comments />. Data layout (see firestore.rules):
//   posts/{postId}/comments/{id}  { uid, name, photo, text, createdAt }
//   posts/{postId}/likes/{uid}    { createdAt }
import type { User } from 'firebase/auth';
import {
  addDoc, collection, deleteDoc, doc, getCountFromServer, getDoc, getDocs,
  limit, orderBy, query, serverTimestamp, setDoc, type Timestamp,
} from 'firebase/firestore';
import { db, isAdmin, onUser, signInWithGithub, signInWithGoogle, signOutUser } from './firebase';

const $ = <T extends Element>(root: Element, sel: string) => root.querySelector<T>(sel)!;

export function mountComments(root: HTMLElement) {
  const postId = root.dataset.postId!;
  const commentsCol = collection(db, 'posts', postId, 'comments');
  const likesCol = collection(db, 'posts', postId, 'likes');

  const signedOut = $<HTMLElement>(root, '[data-signed-out]');
  const form = $<HTMLFormElement>(root, '[data-form]');
  const textarea = $<HTMLTextAreaElement>(form, 'textarea');
  const status = $<HTMLElement>(form, '[data-status]');
  const list = $<HTMLOListElement>(root, '[data-list]');
  const empty = $<HTMLElement>(root, '[data-empty]');
  const count = $<HTMLElement>(root, '[data-count]');
  const likeBtn = $<HTMLButtonElement>(root, '[data-like]');
  const likeCount = $<HTMLElement>(root, '[data-like-count]');
  const tpl = $<HTMLTemplateElement>(root, '[data-item]');

  let user: User | null = null;
  let liked = false;
  let likes = 0;

  const setStatus = (msg: string, error = false) => {
    status.textContent = msg;
    status.className = `text-sm ${error ? 'text-red-600' : 'text-ink-500 dark:text-ink-400'}`;
  };

  const renderLike = () => {
    likeCount.textContent = String(likes);
    likeBtn.setAttribute('aria-pressed', String(liked));
    likeBtn.classList.toggle('!text-accent-700', liked);
    likeBtn.classList.toggle('!border-accent-500', liked);
    likeBtn.querySelector('path')?.setAttribute('fill', liked ? 'currentColor' : 'none');
  };

  async function loadComments() {
    const snap = await getDocs(query(commentsCol, orderBy('createdAt', 'desc'), limit(200)));
    list.replaceChildren();
    snap.forEach((d) => {
      const c = d.data() as { uid: string; name: string; photo: string; text: string; createdAt?: Timestamp };
      const li = tpl.content.firstElementChild!.cloneNode(true) as HTMLLIElement;
      const img = $<HTMLImageElement>(li, '[data-photo]');
      if (c.photo) img.src = c.photo;
      else img.remove();
      $(li, '[data-name]').textContent = c.name || 'Reader';
      $(li, '[data-text]').textContent = c.text; // textContent: never render user input as HTML
      const date = c.createdAt?.toDate();
      if (date) {
        const t = $<HTMLTimeElement>(li, '[data-date]');
        t.dateTime = date.toISOString();
        t.textContent = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
      }
      const del = $<HTMLButtonElement>(li, '[data-delete]');
      if (user && (user.uid === c.uid || isAdmin(user))) {
        del.hidden = false;
        del.addEventListener('click', async () => {
          if (!confirm('Delete this comment?')) return;
          await deleteDoc(d.ref);
          loadComments();
        });
      }
      list.append(li);
    });
    count.textContent = snap.size ? `(${snap.size})` : '';
    empty.hidden = snap.size > 0;
  }

  async function loadLikes() {
    likes = (await getCountFromServer(likesCol)).data().count;
    liked = user ? (await getDoc(doc(likesCol, user.uid))).exists() : false;
    renderLike();
  }

  async function signIn(provider: 'google' | 'github') {
    try {
      await (provider === 'github' ? signInWithGithub() : signInWithGoogle());
    } catch (e) {
      const code = (e as { code?: string }).code;
      if (code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request') return;
      if (code === 'auth/account-exists-with-different-credential') {
        alert('You have signed in here before with the other option using the same email. Please use that one.');
      } else {
        alert('Sign-in failed. Please allow pop-ups for this site and try again.');
      }
    }
  }

  onUser((u) => {
    user = u;
    signedOut.hidden = Boolean(u);
    form.hidden = !u;
    if (u) {
      const photo = $<HTMLImageElement>(form, '[data-me-photo]');
      if (u.photoURL) photo.src = u.photoURL;
      $(form, '[data-me-name]').textContent = u.displayName || u.email || 'You';
    }
    loadComments().catch(() => setStatus('Could not load comments.', true));
    loadLikes().catch(() => {});
  });

  root.querySelectorAll<HTMLButtonElement>('[data-signin]').forEach((b) =>
    b.addEventListener('click', () => signIn(b.dataset.signin as 'google' | 'github')),
  );
  $(form, '[data-signout]').addEventListener('click', () => signOutUser());

  likeBtn.addEventListener('click', async () => {
    if (!user) {
      signedOut.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    likeBtn.disabled = true;
    try {
      const ref = doc(likesCol, user.uid);
      if (liked) await deleteDoc(ref);
      else await setDoc(ref, { createdAt: serverTimestamp() });
      liked = !liked;
      likes += liked ? 1 : -1;
      renderLike();
    } finally {
      likeBtn.disabled = false;
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = textarea.value.trim();
    if (!user || !text) return;
    const btn = $<HTMLButtonElement>(form, 'button[type=submit]');
    btn.disabled = true;
    setStatus('Posting…');
    try {
      await addDoc(commentsCol, {
        uid: user.uid,
        name: (user.displayName || 'Reader').slice(0, 100),
        photo: (user.photoURL || '').slice(0, 500),
        text: text.slice(0, 2000),
        createdAt: serverTimestamp(),
      });
      textarea.value = '';
      setStatus('Comment posted. Thanks!');
      await loadComments();
    } catch {
      setStatus('Could not post your comment. Please try again.', true);
    } finally {
      btn.disabled = false;
    }
  });
}
