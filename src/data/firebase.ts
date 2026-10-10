// Firebase web config (Project settings → Your apps → Web app). Not a secret:
// access is enforced by the Firestore rules in firestore.rules.
// Comments stay hidden on the site until apiKey and projectId are filled in.
export const firebaseConfig = {
  apiKey: 'AIzaSyDKnrfKKfF4YxsfeEByJX9MH3xLz-mTdHc',
  authDomain: 'ankit-qa-consulting.firebaseapp.com',
  projectId: 'ankit-qa-consulting',
  storageBucket: 'ankit-qa-consulting.firebasestorage.app',
  messagingSenderId: '1097666261055',
  appId: '1:1097666261055:web:1b50f4e3adf1d5db34c88a',
};

// Signed-in users with these emails can delete any comment (moderation).
// Keep in sync with isAdmin() in firestore.rules.
export const adminEmails = ['ankit.deepblue@gmail.com'];

// GitHub sign-in alongside Google. Needs a GitHub OAuth App configured in
// Firebase → Authentication → Sign-in method → GitHub before turning on.
export const githubSignIn = false;
