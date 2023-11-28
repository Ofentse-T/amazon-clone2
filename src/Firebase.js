import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcU6NqYTqQyE76-QGAPrhgHESGDDdg_XA",
  authDomain: "clone-670f9.firebaseapp.com",
  projectId: "clone-670f9",
  storageBucket: "clone-670f9.appspot.com",
  messagingSenderId: "238563410545",
  appId: "1:238563410545:web:ff5f5817c579f0f83f91d0",
  measurementId: "G-BD77DTH5Y3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
