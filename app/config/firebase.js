import firebase from "firebase/app";
import settings from "./settings";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//console.log("settings", settings);
// Initialize Firebase
const firebaseConfig = {
  apiKey: settings.firebase.apiKey,
  authDomain: settings.firebase.authDomain,
  projectId: settings.firebase.projectId,
  storageBucket: settings.firebase.storageBucket,
  messagingSenderId: settings.firebase.messagingSenderId,
  appId: settings.firebase.appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default { app, auth };
