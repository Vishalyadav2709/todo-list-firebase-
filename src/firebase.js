// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9PYg2L9z8uJ7grhKr5-D04VJW50I6xbY",
  authDomain: "todo-a8348.firebaseapp.com",
  databaseURL: "https://todo-a8348-default-rtdb.firebaseio.com",
  projectId: "todo-a8348",
  storageBucket: "todo-a8348.appspot.com",
  messagingSenderId: "174233782393",
  appId: "1:174233782393:web:c070bf989ac5267000aca8",
  measurementId: "G-WDF5XDMJEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
