// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz-LcSUchPFHp7Og61HNmNbYY2Q3Fj9i0",
  authDomain: "evai-travel-planner.firebaseapp.com",
  projectId: "evai-travel-planner",
  storageBucket: "evai-travel-planner.appspot.com",
  messagingSenderId: "378461551895",
  appId: "1:378461551895:web:f7e2bbcabc212333cc0b52",
  measurementId: "G-1BCSPTMHPM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);