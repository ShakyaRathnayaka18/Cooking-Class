// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCEStSovxtf7TZwUTWvaQk3-RJFzaT0g0",
  authDomain: "cooking-class-platform.firebaseapp.com",
  projectId: "cooking-class-platform",
  storageBucket: "cooking-class-platform.appspot.com",
  messagingSenderId: "934530110839",
  appId: "1:934530110839:web:90890e195e6ef5cfb57d72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;