// import firebase from "firebase";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBcAGEYePE2zv1JOWht8LE8jlCo9YG9Bpg",
  authDomain: "movie-search-database.firebaseapp.com",
  databaseURL: "https://movie-search-database.firebaseio.com",
  projectId: "movie-search-database",
  storageBucket: "",
  messagingSenderId: "946011060545"
};

// if (!firebase.apps.length) {
//     alert('initialize fb');
//     firebase.initializeApp(config);
//     var database = firebase.database();
// }

// try {
//   firebase.initializeApp(config);
//   var database = firebase.database();
// } catch (err) {}

console.log(firebase.apps.length);

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
