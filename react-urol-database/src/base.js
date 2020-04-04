import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcmgfgNf9bcDPjtyFOI9VhlWYxFJ7o8pw",
    authDomain: "urol-database.firebaseapp.com",
    databaseURL: "https://urol-database.firebaseio.com"

});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;