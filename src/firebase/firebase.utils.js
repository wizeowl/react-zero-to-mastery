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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = await firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating data', error);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const covertCollectionsSnapshotToMap = (collections) => {
  return collections.docs.map(
    doc => {
      const { title, items } = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    }
  ).reduce(
    (acc, { title, ...rest }) => ({
      ...acc,
      [title.toLowerCase()]: { title, ...rest }
    }), {}
  );
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;
