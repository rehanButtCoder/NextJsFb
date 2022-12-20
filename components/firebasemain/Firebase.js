// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaGCJvOlZqScHu2CEQhfusIaejJ-SqsHc",
    authDomain: "test-da89e.firebaseapp.com",
    projectId: "test-da89e",
    storageBucket: "test-da89e.appspot.com",
    messagingSenderId: "135146799539",
    appId: "1:135146799539:web:943cb07b04724571c0cbc6",
    measurementId: "G-JJ7JS2V28N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// storage for file uplaoding
const storage = getStorage(app);
export default storage;

