// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQtY3zzKlYrs3iBvZxEeFaOcJInz0m4Yk",
  authDomain: "geoalertdata.firebaseapp.com",
  projectId: "geoalertdata",
  storageBucket: "geoalertdata.appspot.com",
  messagingSenderId: "967198115211",
  appId: "1:967198115211:web:4cb42a495a5c62b5359b8e"
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