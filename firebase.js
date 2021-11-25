// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
//import firebase from 'firebase'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxB1q3213qSOScErA7ncaPSaAW3UT4U2g",
  authDomain: "rn-instagram-clone-dc4c9.firebaseapp.com",
  projectId: "rn-instagram-clone-dc4c9",
  storageBucket: "rn-instagram-clone-dc4c9.appspot.com",
  messagingSenderId: "125598172162",
  appId: "1:125598172162:web:e4c2256ea87475504d131b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db