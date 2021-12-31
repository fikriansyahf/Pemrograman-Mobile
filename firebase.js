// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,  
    } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { initializeFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDwWoQlgfxRBd7iyDM7kTWnGs5FDZ67fXQ",
  authDomain: "wa-clone-cd4db.firebaseapp.com",
  projectId: "wa-clone-cd4db",
  storageBucket: "wa-clone-cd4db.appspot.com",
  messagingSenderId: "806430797509",
  appId: "1:806430797509:web:4ea8ff0cffb7b700448aac"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export function signIn(email, password){
    return signInWithEmailAndPassword(auth, email, password)
}
export function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
}