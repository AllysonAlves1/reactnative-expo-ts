// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXiFUrQw_SUXZskiqUtuS4bqfwd2xVBmk",
  authDomain: "reactnativeapp-fa5e1.firebaseapp.com",
  projectId: "reactnativeapp-fa5e1",
  storageBucket: "reactnativeapp-fa5e1.appspot.com",
  messagingSenderId: "130331860747",
  appId: "1:130331860747:web:39111e547c21f6c2f78c0e",
  measurementId: "G-R8SDG16GRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };