import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth"; // ✅ أضفنا الـ Authentication

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAcTBlaVmlzls5ZcD1xVUzAc6qz-Hg6i_o",
  authDomain: "hossam-194d9.firebaseapp.com",
  projectId: "hossam-194d9",
  storageBucket: "hossam-194d9.firebasestorage.app",
  messagingSenderId: "501196755694",
  appId: "1:501196755694:web:a53e2e0f77455e3d3119ff",
  measurementId: "G-3CF43BW9EZ",
};

// initialize
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const storage = app.storage();
const auth = app.auth(); // ✅ أنشأنا متغير خاص بالـ Authentication

export { db, storage, auth };
