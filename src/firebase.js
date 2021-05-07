// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPfvoXCu9GPFRhiXGpp_6jErCb7VSj-J0",
  authDomain: "clone-f4fe1.firebaseapp.com",
  projectId: "clone-f4fe1",
  storageBucket: "clone-f4fe1.appspot.com",
  messagingSenderId: "901922673521",
  appId: "1:901922673521:web:7f148a2598bf7b75c15cd0",
  measurementId: "G-6KW8T5KH2B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
