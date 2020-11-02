import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDkrzw8crBZItgTClhWp-OAtAmTXOZNrnY",
    authDomain: "todo-tatti-app.firebaseapp.com",
    databaseURL: "https://todo-tatti-app.firebaseio.com",
    projectId: "todo-tatti-app",
    storageBucket: "todo-tatti-app.appspot.com",
    messagingSenderId: "1079864352244",
    appId: "1:1079864352244:web:a2b5018248133bb3416da1",
    measurementId: "G-L1ZVS1FJY7"
});

const db = firebaseApp.firestore();

export default db