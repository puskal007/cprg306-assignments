import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TEMPORARY HARDCODE - Replace with environment variables later
const firebaseConfig = {
  apiKey: "AIzaSyBjd7uQJc5wCbV6kYM5ChFgtoZfMKNDX2k",
  authDomain: "cprg-306-assignment-9d6ad.firebaseapp.com",
  projectId: "cprg-306-assignment-9d6ad",
  storageBucket: "cprg-306-assignment-9d6ad.firebasestorage.app",
  messagingSenderId: "205421848144",
  appId: "1:205421848144:web:500f96b7a74d9cef7b1355",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);