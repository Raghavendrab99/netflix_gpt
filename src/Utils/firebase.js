// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTOJ931LhOLELx6j4jf4nM7k-iG7OqtuA",
    authDomain: "netflix-gpt-d2f28.firebaseapp.com",
    projectId: "netflix-gpt-d2f28",
    storageBucket: "netflix-gpt-d2f28.appspot.com",
    messagingSenderId: "764114610155",
    appId: "1:764114610155:web:61655ab8cf5e924c305bae",
    measurementId: "G-R2MY4H3BDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);