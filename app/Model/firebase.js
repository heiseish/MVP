import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCFNduuT75APAQc-O3bxrY9LrN-CpP9HVc",
  authDomain: "mvpapp-1ba71.firebaseapp.com",
  databaseURL: "https://mvpapp-1ba71.firebaseio.com",
  projectId: "mvpapp-1ba71",
  storageBucket: "mvpapp-1ba71.appspot.com",
  messagingSenderId: "1081716234358"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);







// writeUserData('hung');
// Create a reference with .ref() instead of new Firebase(url)


module.exports =firebaseApp;
