import { auth, provider } from '../Firebase.js';
// Update the path accordingly


// Function to handle Google sign-in
export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};
