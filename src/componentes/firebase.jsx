import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyAcu4q3xwFmGl_N34eYSjthvr-3762F-Y8",
  authDomain: "appmoto-d8911.firebaseapp.com",
  projectId: "appmoto-d8911",
  storageBucket: "appmoto-d8911.appspot.com",
  messagingSenderId: "386656220536",
  appId: "1:386656220536:web:267ae5099725601752c48d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseDB = firebase.firestore();
export const firebaseAuth = firebase.auth();
