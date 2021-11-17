import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {

    apiKey: "AIzaSyCBAhPNnarIRewiwA36vf-Cmq2h7BY9oq8",
    authDomain: "disneyplus-clone-62256.firebaseapp.com",
    projectId: "disneyplus-clone-62256",
    storageBucket: "disneyplus-clone-62256.appspot.com",
    messagingSenderId: "161516292229",
    appId: "1:161516292229:web:10cd915ce45068274401ec",
    measurementId: "G-7Q77TKZE8N"

};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage =firebase.storage();

export { auth,provider,storage};
export default db;