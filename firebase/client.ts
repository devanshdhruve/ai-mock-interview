// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAza3EuXfi0RmyVrloWmF7BYbcaig3vUMo",
  authDomain: "preppal-d423c.firebaseapp.com",
  projectId: "preppal-d423c",
  storageBucket: "preppal-d423c.firebasestorage.app",
  messagingSenderId: "733694558643",
  appId: "1:733694558643:web:23b03af666f6eaf45ecbc6",
  measurementId: "G-SMGXXELQLK",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
