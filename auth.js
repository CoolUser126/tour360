// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYHs8eE0Lprry6m8wc-IiSyl4Ohy-1iMM",
  authDomain: "tour-360-e22c0.firebaseapp.com",
  projectId: "tour-360-e22c0",
  storageBucket: "tour-360-e22c0.firebasestorage.app",
  messagingSenderId: "301447708197",
  appId: "1:301447708197:web:0d3adf5f555f0605ae49cc",
  measurementId: "G-3XM89WH288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);