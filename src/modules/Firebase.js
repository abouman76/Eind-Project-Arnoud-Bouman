import firebase from "firebase"

const app = firebase.initializeApp({

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "eind-opdracht-novi.firebaseapp.com",
    projectId: "eind-opdracht-novi",
    storageBucket: "eind-opdracht-novi.appspot.com",
    messagingSenderId: process.env.REACT_APP_API_MSG,
    appId: process.env.REACT_APP_API_ID


    // OUDE API
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: "sociaal-oosterhout.firebaseapp.com",
    // projectId: "sociaal-oosterhout",
    // storageBucket: "sociaal-oosterhout.appspot.com",
    // messagingSenderId: process.env.REACT_APP_API_MSG,
    // appId: process.env.REACT_APP_API_ID
});
export default app;