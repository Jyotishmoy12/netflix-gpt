// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-fPpWsioXTSTUVi0V34w7cvAQVD2w_Mo",
  authDomain: "netflixgpt-c0fc0.firebaseapp.com",
  projectId: "netflixgpt-c0fc0",
  storageBucket: "netflixgpt-c0fc0.appspot.com",
  messagingSenderId: "160335637980",
  appId: "1:160335637980:web:ae2749d39524975ed53319",
  measurementId: "G-RY5VRSJ2FE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();