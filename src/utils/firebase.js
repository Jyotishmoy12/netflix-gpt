

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ3MaDNfNNzdBS1d_2nTKABG6gWSkAnKM",
  authDomain: "mypersonal-bbf90.firebaseapp.com",
  projectId: "mypersonal-bbf90",
  storageBucket: "mypersonal-bbf90.appspot.com",
  messagingSenderId: "168182746064",
  appId: "1:168182746064:web:afdf17ac45d25eccdc47d5",
  measurementId: "G-550RBVECY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();



