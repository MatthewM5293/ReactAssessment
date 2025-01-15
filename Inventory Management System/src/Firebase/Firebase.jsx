// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpBWqyXUXXFbxUQ-BX6Fo7_wYzee-pf6I",
    authDomain: "hydrojugassessment.firebaseapp.com",
    projectId: "hydrojugassessment",
    storageBucket: "hydrojugassessment.firebasestorage.app",
    messagingSenderId: "1063232022331",
    appId: "1:1063232022331:web:655dceab106076c53df91e",
    measurementId: "G-YVC2GTPTZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);