// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrrHKenRbeiyfUO58v88TSJEdtWumWZjk",
  authDomain: "audiophile-a8abd.firebaseapp.com",
  databaseURL: "https://audiophile-a8abd-default-rtdb.firebaseio.com",
  projectId: "audiophile-a8abd",
  storageBucket: "audiophile-a8abd.appspot.com",
  messagingSenderId: "193961133135",
  appId: "1:193961133135:web:9c9e8731fc281a68eb563a",
  measurementId: "G-V2C17TC2ZN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);