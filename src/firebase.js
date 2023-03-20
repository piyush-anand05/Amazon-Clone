// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACQQ_IvIBruT84khX3n2odT1JXMcw6MNk",
  authDomain: "clone-56835.firebaseapp.com",
  projectId: "clone-56835",
  storageBucket: "clone-56835.appspot.com",
  messagingSenderId: "1088141820248",
  appId: "1:1088141820248:web:7780e1687b9b6f97eb652d",
  measurementId: "G-6T3XZGKYPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);