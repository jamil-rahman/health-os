import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBCrqUVJLKzz3rUeUXWMiUHAjQHbLnW58",
  authDomain: "react-auth-boilerplate-6acca.firebaseapp.com",
  databaseURL: "https://react-firebase-fc06e.firebaseio.com",
  projectId: "react-auth-boilerplate-6acca",
  storageBucket: "react-auth-boilerplate-6acca.appspot.com",
  messagingSenderId: "721232478287",
  appId: "721232478287:web:043762356c00bbd33baa3a",
  measurementId: "721232478287",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
