import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrtiI8m5cGk9LKUJ61MXxPgXQnPNs1x8s",
  authDomain: "sea-basket-8a6d1.firebaseapp.com",
  projectId: "sea-basket-8a6d1",
  storageBucket: "sea-basket-8a6d1.appspot.com",
  messagingSenderId: "558483956868",
  appId: "1:558483956868:web:4e84da86ae72602e918ed1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const Db = firebaseApp.firestore();

export default Db;
