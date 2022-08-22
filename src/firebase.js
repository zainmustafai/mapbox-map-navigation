import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZne_BYKIM5BFcaT1y2aap2muFBFRTuUM",
  authDomain: "react-navigation-app.firebaseapp.com",
  projectId: "react-navigation-app",
  storageBucket: "react-navigation-app.appspot.com",
  messagingSenderId: "468792809087",
  appId: "1:468792809087:web:df08be2c72efc3a9a2114a",
  measurementId: "G-FQZZDJRE7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;