import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "IzaSyAhjDPTE-sSl43itXwB6KJ3Hyqe6M1xgIE",
  authDomain: "cliently-6c365.firebaseapp.com",
  databaseURL: "https://cliently-6c365.firebaseio.com",
  projectId: "cliently-6c365",
  storageBucket: "cliently-6c365.appspot.com",
  messagingSenderId: "526310121203",
  appId: "1:526310121203:web:05680b024202461ce82186",
  measurementId: "G-ND54YR468B"
};
if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

// always prompt for google auth when using this provider
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
  return await auth.signInWithPopup(googleProvider);
};

export default firebase;
