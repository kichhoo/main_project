
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDmZK0vP-fPYGe4ZnRS2exM3g2Ne5hAOMQ",
  authDomain: "marketbasket-f1cba.firebaseapp.com",
  projectId: "marketbasket-f1cba",
  storageBucket: "marketbasket-f1cba.appspot.com",
  messagingSenderId: "1004553086159",
  appId: "1:1004553086159:web:b556f01abbf2c4b358c3ba",
  measurementId: "G-4SG093CQKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const database = getFirestore();
