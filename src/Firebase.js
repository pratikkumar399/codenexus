// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxa5NCS-Z-29lHnfN3KBL8pGtS6bt29xI",
    authDomain: "codenexusauth.firebaseapp.com",
    projectId: "codenexusauth",
    storageBucket: "codenexusauth.appspot.com",
    messagingSenderId: "124819331694",
    appId: "1:124819331694:web:689767b0406136da15247f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }