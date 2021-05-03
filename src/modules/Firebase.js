// import React from "react";
import firebase from "firebase"

const app = firebase.initializeApp({

    apiKey: "AIzaSyBsIR0XxhYw7xexmlXDglU0xstGNZJt1-E",
    authDomain: "eind-opdracht-novi.firebaseapp.com",
    projectId: "eind-opdracht-novi",
    storageBucket: "eind-opdracht-novi.appspot.com",
    messagingSenderId: "790917037324",
    appId: "1:790917037324:web:49e934a308aa6117a89d29"

    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: "sociaal-oosterhout.firebaseapp.com",
    // projectId: "sociaal-oosterhout",
    // storageBucket: "sociaal-oosterhout.appspot.com",
    // messagingSenderId: process.env.REACT_APP_API_MSG,
    // appId: process.env.REACT_APP_API_ID
});
export default app;