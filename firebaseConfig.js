// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl-ejaBqqQlwmKsMnaT1HzxP1iemoxS8w",
  authDomain: "absolute-units.firebaseapp.com",
  projectId: "absolute-units",
  storageBucket: "absolute-units.appspot.com",
  messagingSenderId: "588589820289",
  appId: "1:588589820289:web:4eef9033c24e3ea2602080",
  measurementId: "G-0NHHC3WPQD",
  databaseURL: "https://absolute-units-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);