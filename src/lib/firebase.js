// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkKkOg9NAgQeC6vikUfF_FvtnrUi7kmro",
  authDomain: "web-app-27e0f.firebaseapp.com",
  projectId: "web-app-27e0f",
  storageBucket: "web-app-27e0f.firebasestorage.app",
  messagingSenderId: "772741851188",
  appId: "1:772741851188:web:18453671f70bb48be5c261",
  measurementId: "G-Z6WJYE1BK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);