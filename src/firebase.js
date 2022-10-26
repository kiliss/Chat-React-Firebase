import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtA6jyDOe49TDlAqZQzqbU7bPv3QNMbz0",
  authDomain: "chat-fa0dc.firebaseapp.com",
  projectId: "chat-fa0dc",
  storageBucket: "chat-fa0dc.appspot.com",
  messagingSenderId: "799951038127",
  appId: "1:799951038127:web:f0d42753d3b1bae0cb965a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()