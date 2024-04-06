// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDELKIBCU6Aw0XVS8TlWrvAFQAtk5B7Nkc",
  authDomain: "netflix-gpt-db504.firebaseapp.com",
  projectId: "netflix-gpt-db504",
  storageBucket: "netflix-gpt-db504.appspot.com",
  messagingSenderId: "788221060202",
  appId: "1:788221060202:web:fe19eafdece697e46a9613",
  measurementId: "G-GD5PD03YCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()