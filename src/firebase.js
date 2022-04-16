import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBpz9yQc3IiRcSWAlZYGuRALGeo7YXK8w",
  authDomain: "tesla-clone-477c7.firebaseapp.com",
  projectId: "tesla-clone-477c7",
  storageBucket: "tesla-clone-477c7.appspot.com",
  messagingSenderId: "549587850778",
  appId: "1:549587850778:web:6f302ddf320b285197a3a3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export default auth;
