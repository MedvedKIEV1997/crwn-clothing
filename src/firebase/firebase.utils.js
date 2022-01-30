import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB4UppkNMDtCo4BZdaryii9WLpPjRo6N8E",
  authDomain: "crwn-shop-4c617.firebaseapp.com",
  projectId: "crwn-shop-4c617",
  storageBucket: "crwn-shop-4c617.appspot.com",
  messagingSenderId: "543078905345",
  appId: "1:543078905345:web:199c5f993ad33dc4a87200",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
