import firebase from './firebase'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAojKVvzaWY3etENk1RUx9g_oWbJmm6Kds",
  authDomain: "todo-11b3a.firebaseapp.com",
  projectId: "todo-11b3a",
  storageBucket: "todo-11b3a.appspot.com",
  messagingSenderId: "185079604559",
  appId: "1:185079604559:web:f50997b23bbc57f3ad513a",
  measurementId: "G-9BW3CY6PGQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics()

export default firebase;