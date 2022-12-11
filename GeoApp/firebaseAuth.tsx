// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY8DsZmr4EQtX3-gh6RHcpUA3xag_DU3o",
  authDomain: "geoappauth.firebaseapp.com",
  projectId: "geoappauth",
  storageBucket: "geoappauth.appspot.com",
  messagingSenderId: "132186045984",
  appId: "1:132186045984:web:8ce0843b5e1ae8e2c70645"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export {auth};