import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVl81zHPODP2blK8X3G6tjwzu2sMSCXGk",
  authDomain: "next-firebase-3b45e.firebaseapp.com",
  projectId: "next-firebase-3b45e",
  storageBucket: "next-firebase-3b45e.appspot.com",
  messagingSenderId: "573961997644",
  appId: "1:573961997644:web:482a52037fc04ffcc053e9",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
