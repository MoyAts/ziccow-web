import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDnhU5KzkoIb-aloCRH7lv8CQsKGsuE8A",
  authDomain: "ziccow-51b16.firebaseapp.com",
  projectId: "ziccow-51b16",
  storageBucket: "ziccow-51b16.appspot.com",
  messagingSenderId: "151683257162",
  appId: "1:151683257162:web:6b1acfb703ebcf88c8e7b3",
  measurementId: "G-SMW811TRXC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const loginWithEmail = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};
