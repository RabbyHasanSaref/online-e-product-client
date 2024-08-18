// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEAgUW5rA4P4Eetiguc26SCceLqTCXkRk",
  authDomain: "online-e-products.firebaseapp.com",
  projectId: "online-e-products",
  storageBucket: "online-e-products.appspot.com",
  messagingSenderId: "515234365682",
  appId: "1:515234365682:web:f40e0469a7f8c64e7ad06b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
