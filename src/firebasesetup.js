import "firebase/compat/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app"

const login = {
    "projectId": "login-d1033",
    "appId": "1:145289559924:web:6888cb9a55a7685ae63621",
    "storageBucket": "login-d1033.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyBsWI6z9R7Ltm6BAD1xyJRITuMrApZAnbw",
    "authDomain": "login-d1033.firebaseapp.com",
    "messagingSenderId": "145289559924"
  };
const app = initializeApp(login)
const auth = getAuth(app);
const db = getFirestore(app);

  export {auth , db, app}