// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 import firebase from 'firebase'
import 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbhdMII9MLoOmHlJieLOmb9VoiidAJ3-4",
  authDomain: "a-hadi.firebaseapp.com",
  databaseURL: "https://a-hadi.firebaseio.com",
  projectId: "a-hadi",
  storageBucket: "a-hadi.appspot.com",
  messagingSenderId: "1062057810390",
  appId: "1:1062057810390:web:37948097fd9fcdc684ac77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);