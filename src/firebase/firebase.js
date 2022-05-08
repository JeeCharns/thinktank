import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Charlies web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBMa8j_XY_SLeLk7ADaU4ynrmvL8DsAyUo",
//   authDomain: "thinktank-33b46.firebaseapp.com",
//   databaseURL:
//     "https://thinktank-33b46-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "thinktank-33b46",
//   storageBucket: "thinktank-33b46.appspot.com",
//   messagingSenderId: "508424049998",
//   appId: "1:508424049998:web:7cdea1666bb4211f0f3a1f",
//   measurementId: "G-13W13E77CE",
// };

// ella's config (I just need adding to your firebase project!)
const firebaseConfig = {
  apiKey: "AIzaSyB6O9vXECLAYL66yxHrdNMntcoXa7LeufM",
  authDomain: "thinktank-4d39a.firebaseapp.com",
  projectId: "thinktank-4d39a",
  storageBucket: "thinktank-4d39a.appspot.com",
  messagingSenderId: "499344187443",
  appId: "1:499344187443:web:91d52c187a75c7f2c28346"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
