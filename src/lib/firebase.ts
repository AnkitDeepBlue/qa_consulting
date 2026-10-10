// Shared Firebase setup: Google sign-in + Firestore. Reused by comments now and course access later.
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig, adminEmails } from '../data/firebase';

const app = getApps()[0] ?? initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
export const signOutUser = () => signOut(auth);
export const onUser = (cb: (user: User | null) => void) => onAuthStateChanged(auth, cb);
export const isAdmin = (user: User | null) =>
  Boolean(user?.email && user.emailVerified && adminEmails.includes(user.email));
