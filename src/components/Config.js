import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUAuVibre0X5sUNkrmizlEnzJRJUvULOw",
    authDomain: "getsorted-4bb82.firebaseapp.com",
    projectId: "getsorted-4bb82",
    storageBucket: "getsorted-4bb82.appspot.com",
    messagingSenderId: "827685432575",
    appId: "1:827685432575:web:d3acffb25eebcb621430ca",
    measurementId: "G-BZ2WW4K7V2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth} ;