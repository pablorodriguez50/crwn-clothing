import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCMFUGtsnxSxZK73nsDTMpL9TfkSPoA8Ig",
    authDomain: "crwn-db-72a03.firebaseapp.com",
    projectId: "crwn-db-72a03",
    storageBucket: "crwn-db-72a03.appspot.com",
    messagingSenderId: "13214911774",
    appId: "1:13214911774:web:9d83cf9d6fff41c711cd0f",
    measurementId: "G-BQYTF1LQ5W"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



