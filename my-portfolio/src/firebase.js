import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importăm Firestore
import { getAuth } from "firebase/auth";

// Configurația Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCy1ai2685dyMg3-3-C-hAijqnjT4YAf08",
  authDomain: "notesapp-b0d1f.firebaseapp.com",
  projectId: "notesapp-b0d1f",
  storageBucket: "notesapp-b0d1f.appspot.com",
  messagingSenderId: "945738552893",
  appId: "1:945738552893:web:822ee3320ad2e0d2267c54",
  measurementId: "G-DCTD4D9SP9",
};

// Inițializează Firebase
const app = initializeApp(firebaseConfig);

// Instanțe pentru Firestore și Authentication
export const db = getFirestore(app); // Exportăm Firestore
export const auth = getAuth(app);
