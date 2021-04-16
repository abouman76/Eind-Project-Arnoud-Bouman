// import React from "react";
import firebase from "firebase"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "sociaal-oosterhout.firebaseapp.com",
    projectId: "sociaal-oosterhout",
    storageBucket: "sociaal-oosterhout.appspot.com",
    messagingSenderId: process.env.REACT_APP_API_MSG,
    appId: process.env.REACT_APP_API_ID
});
export default app;