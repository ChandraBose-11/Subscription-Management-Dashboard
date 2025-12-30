// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuR7Db4zABzV-ylI2UPMONL8Qkts3Cf8Q",
  authDomain: "subscription-management-c248f.firebaseapp.com",
  projectId: "subscription-management-c248f",
  storageBucket: "subscription-management-c248f.firebasestorage.app",
  messagingSenderId: "660869204730",
  appId: "1:660869204730:web:2229fbf217b53bbefed743",
  measurementId: "G-PE681X47TL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);