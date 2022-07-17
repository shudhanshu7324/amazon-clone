import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWnWnVTndhjiGS1xHHD1x3mws721T-eOQ",
  authDomain: "clone-2e7de.firebaseapp.com",
  projectId: "clone-2e7de",
  storageBucket: "clone-2e7de.appspot.com",
  messagingSenderId: "580807025339",
  appId: "1:580807025339:web:95a91a6f1573057fc03f9e",
  measurementId: "G-1VBEWPG6F2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
