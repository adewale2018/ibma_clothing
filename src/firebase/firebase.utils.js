import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBzTpB6n_U9geCLrGY7-Z7_kuPYTdz2e-A",
  authDomain: "ibma-clothing.firebaseapp.com",
  databaseURL: "https://ibma-clothing.firebaseio.com",
  projectId: "ibma-clothing",
  storageBucket: "ibma-clothing.appspot.com",
  messagingSenderId: "859219188669",
  appId: "1:859219188669:web:171c203b080aa2b7ad50d4",
  measurementId: "G-J81QSJETX9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exits) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
