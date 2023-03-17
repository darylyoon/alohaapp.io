// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZcXRxxi8cnz1BRhm6DBbEK8QCG5Z9rFw",
  authDomain: "alohaapp-dd0e2.firebaseapp.com",
  projectId: "alohaapp-dd0e2",
  storageBucket: "alohaapp-dd0e2.appspot.com",
  messagingSenderId: "479465837859",
  appId: "1:479465837859:web:26a1a4d5b91ec6278f6896",
  measurementId: "G-D3F2VVTZG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
