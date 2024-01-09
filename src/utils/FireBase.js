    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi41UkwRvEXPfeRCGefrNNOSRbcA_JzWo",
  authDomain: "netflixgpt-3ec07.firebaseapp.com",
  projectId: "netflixgpt-3ec07",
  storageBucket: "netflixgpt-3ec07.appspot.com",
  messagingSenderId: "813663219406",
  appId: "1:813663219406:web:7c5550caddd949a1d86a9f",
  measurementId: "G-M6T9RXKK7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
