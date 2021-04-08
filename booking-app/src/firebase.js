import firebase from "firebase/app";
import "firebase/firestore ";

const firebaseConfig = {
    apiKey: "AIzaSyDiOIQHkxh3fdEUqgGC17zkOXga6_suEz0",
    authDomain: "flutterapp-a5eb3.firebaseapp.com",
    databaseURL: "https://flutterapp-a5eb3.firebaseio.com",
    projectId: "flutterapp-a5eb3",
    storageBucket: "flutterapp-a5eb3.appspot.com",
    messagingSenderId: "83435232921",
    appId: "1:83435232921:web:0bfe045d93e5d1a885e208",
    measurementId: "G-5ZF8CPTYPZ"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;