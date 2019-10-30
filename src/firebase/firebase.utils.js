import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCRDM0QEWdWuOMyymGTzyd9uk6cCc_9zAo",
    authDomain: "bruce-greene-website.firebaseapp.com",
    databaseURL: "https://bruce-greene-website.firebaseio.com",
    projectId: "bruce-greene-website",
    storageBucket: "bruce-greene-website.appspot.com",
    messagingSenderId: "873502455314",
    appId: "1:873502455314:web:f472402277ca349f134acb",
    measurementId: "G-4T6EZ2RSKT"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;