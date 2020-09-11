import * as firebase from "firebase/app";
import "firebase/firestore";

const apiKey = process.env.REACT_APP_FIRESTORE_API_KEY;
const appId = process.env.REACT_APP_FIRESTORE_APP_ID;

const app = firebase.initializeApp({
  apiKey,
  authDomain: "coderhouse-ecommerce-9e443.firebaseapp.com",
  databaseURL: "https://coderhouse-ecommerce-9e443.firebaseio.com",
  projectId: "coderhouse-ecommerce-9e443",
  storageBucket: "coderhouse-ecommerce-9e443.appspot.com",
  messagingSenderId: "713502779218",
  appId,
});

export const getFirebase = () => app;

export const getFirestore = () => {
  return firebase.firestore(app);
};
