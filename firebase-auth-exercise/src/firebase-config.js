import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "authentication-tutorial-66d77.firebaseapp.com",
  projectId: "authentication-tutorial-66d77",
  storageBucket: "authentication-tutorial-66d77.appspot.com",
  messagingSenderId: "48919052723",
  appId: "1:48919052723:web:4b5590e210dfa63cbfcbc6",
  measurementId: "G-BLWLXVJMPX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
