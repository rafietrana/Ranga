// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXtiScf92yWTfvuQ2GVR0XyYOAIjIKTFo",
  authDomain: "assignment-10-a2856.firebaseapp.com",
  projectId: "assignment-10-a2856",
  storageBucket: "assignment-10-a2856.appspot.com",
  messagingSenderId: "96537322732",
  appId: "1:96537322732:web:13b6aeb4a8bd48ec00b1c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;