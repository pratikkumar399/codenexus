// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, browserLocalPersistence } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACJDNSJBEr2rv-9_FgTPqNqksdruLpVbs",
    authDomain: "codenexus-practice.firebaseapp.com",
    projectId: "codenexus-practice",
    storageBucket: "codenexus-practice.appspot.com",
    messagingSenderId: "790740099718",
    appId: "1:790740099718:web:d47db0ce2a772d86b32707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.setPersistence(browserLocalPersistence);
// auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
export { auth, provider }