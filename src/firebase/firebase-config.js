import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCtDZHxq6L19Z8sm6QMS-eK2SNeW_LZKO0",
  authDomain: "react-curso-56dfb.firebaseapp.com",
  projectId: "react-curso-56dfb",
  storageBucket: "react-curso-56dfb.appspot.com",
  messagingSenderId: "164655665293",
  appId: "1:164655665293:web:e7e4bde7ef7cc267a712c4"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
  db,
  googleAuthProvider,
  firebase
}