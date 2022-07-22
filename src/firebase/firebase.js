import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMa8j_XY_SLeLk7ADaU4ynrmvL8DsAyUo",
  authDomain: "thinktank-33b46.firebaseapp.com",
  databaseURL:
    "https://thinktank-33b46-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thinktank-33b46",
  storageBucket: "thinktank-33b46.appspot.com",
  messagingSenderId: "508424049998",
  appId: "1:508424049998:web:7cdea1666bb4211f0f3a1f",
  measurementId: "G-13W13E77CE",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { db};
