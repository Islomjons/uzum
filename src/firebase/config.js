import firebase from "firebase";
import "firebase/app";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAtsyZLxIFwEJ--K5Jcdrz65LiwgJyQkO4",
    authDomain: "uzum-195b0.firebaseapp.com",
    projectId: "uzum-195b0",
    storageBucket: "uzum-195b0.appspot.com",
    messagingSenderId: "882885313494",
    appId: "1:882885313494:web:875e7a7296a8fa60109a77",
    measurementId: "G-ZRC77RM8FS"
  };

  const backend = firebase.initializeApp(firebaseConfig);
  const auth = backend.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, backend}