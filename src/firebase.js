import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLoYiHChrBZW0mWf9-BqsqzbUwbgD_xqE",
  authDomain: "line-f1e8c.firebaseapp.com",
  projectId: "line-f1e8c",
  storageBucket: "line-f1e8c.appspot.com",
  messagingSenderId: "232068958785",
  appId: "1:232068958785:web:8e00be4dfc4d5298e894c0",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
