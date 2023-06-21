
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"



const firebaseConfig = {
  apiKey: "AIzaSyD0re1EirA_etut9skr5YxtxkExbGXRwi4",
  authDomain: "tiktok------jornada.firebaseapp.com",
  projectId: "tiktok------jornada",
  storageBucket: "tiktok------jornada.appspot.com",
  messagingSenderId: "1052177299808",
  appId: "1:1052177299808:web:ebda2c97846781e67ac605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;