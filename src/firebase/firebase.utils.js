import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDSIBbBsOC8m0GVLA4j6UL28W0NJ9xTYsw",
  authDomain: "crwn-clothing-a131c.firebaseapp.com",
  databaseURL: "https://crwn-clothing-a131c.firebaseio.com",
  projectId: "crwn-clothing-a131c",
  storageBucket: "crwn-clothing-a131c.appspot.com",
  messagingSenderId: "839698012046",
  appId: "1:839698012046:web:138b9662bf34a7a421b6df",
  measurementId: "G-EX7Q875HLS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
