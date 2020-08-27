import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxy9ydjoYlIUYqesqt1kgy87carur2q8I",
  authDomain: "slckify.firebaseapp.com",
  databaseURL: "https://slckify.firebaseio.com",
  projectId: "slckify",
  storageBucket: "slckify.appspot.com",
  messagingSenderId: "768181507806",
  appId: "1:768181507806:web:b2b19d5a9d91e31adb144f"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;