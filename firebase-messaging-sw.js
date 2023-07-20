importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

// todo Copy/paste firebaseConfig from Firebase Console
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5bq2vOEoFkSYjcG1Q8MVZydDisL94fOs",
  authDomain: "flutterchat-4ab9f.firebaseapp.com",
  projectId: "flutterchat-4ab9f",
  storageBucket: "flutterchat-4ab9f.appspot.com",
  messagingSenderId: "1037549388078",
  appId: "1:1037549388078:web:8601464eb78970d3c83abf",
  measurementId: "G-3GH64MJG0Z"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// todo Set up background message handler