import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { attachCustomCommands } from "cypress-firebase";

const app = {
  // Your config from Firebase Console
  apiKey: "AIzaSyBsIR0XxhYw7xexmlXDglU0xstGNZJt1-E",
  authDomain: "eind-opdracht-novi.firebaseapp.com",
  projectId: "eind-opdracht-novi",
  storageBucket: "eind-opdracht-novi.appspot.com",
  messagingSenderId: process.env.REACT_APP_API_MSG,
  appId: process.env.REACT_APP_API_ID,
};

firebase.initializeApp(app);

attachCustomCommands({ Cypress, cy, firebase });

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
