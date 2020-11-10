import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDI240jzktclmgsAUF5PAhLcM_dhE-0cU0",
  authDomain: "react-koch.firebaseapp.com",
  databaseURL: "https://react-koch.firebaseio.com",
  projectId: "react-koch",
  storageBucket: "react-koch.appspot.com",
  messagingSenderId: "472593743536",
  appId: "1:472593743536:web:96556d9a22638c0e66c575",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });
