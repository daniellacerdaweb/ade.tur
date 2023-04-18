// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3UxRnh75dtz2KZxMqMdHhewS28aRReVc",
  authDomain: "ademir-dd732.firebaseapp.com",
  databaseURL: "https://ademir-dd732-default-rtdb.firebaseio.com",
  projectId: "ademir-dd732",
  storageBucket: "ademir-dd732.appspot.com",
  messagingSenderId: "348080894746",
  appId: "1:348080894746:web:477179e679b0749ffef2a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);