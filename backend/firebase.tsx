import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realtime-chat-47721.firebaseapp.com",
  projectId: "realtime-chat-47721",
  storageBucket: "realtime-chat-47721.firebasestorage.app",
  messagingSenderId: "630971466715",
  appId: "1:630971466715:web:a7a3dd71099246da451dfe",
  measurementId: "G-3GJ4N698XQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
