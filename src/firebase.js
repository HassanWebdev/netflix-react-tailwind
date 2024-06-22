// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPjhBY_GTUlJyfEWS6BI7mTfGP8399oP8",
  authDomain: "fir-netflix-b2105.firebaseapp.com",
  databaseURL: "https://fir-netflix-b2105-default-rtdb.firebaseio.com",
  projectId: "fir-netflix-b2105",
  storageBucket: "fir-netflix-b2105.appspot.com",
  messagingSenderId: "871634756854",
  appId: "1:871634756854:web:b1120ffcf257d1135df8d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
