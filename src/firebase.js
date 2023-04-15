// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "alohaapp-dd0e2.firebaseapp.com",
  projectId: "alohaapp-dd0e2",
  storageBucket: "alohaapp-dd0e2.appspot.com",
  messagingSenderId: "479465837859",
  appId: "1:479465837859:web:26a1a4d5b91ec6278f6896",
  measurementId: "G-D3F2VVTZG2"
};
// console.log(firebaseConfig)
// Initialize Firebase
const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const db = getFirestore(app);

export {app, firebaseAuth, provider, db};