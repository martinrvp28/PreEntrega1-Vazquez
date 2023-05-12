// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app";
import {getFirestore, getDoc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBprn4Kpriwh8ThwSTL9F964lC3S41ScU0",
  authDomain: "superbarato-martin.firebaseapp.com",
  projectId: "superbarato-martin",
  storageBucket: "superbarato-martin.appspot.com",
  messagingSenderId: "221854405552",
  appId: "1:221854405552:web:21ef75a21183b425a9bc75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
