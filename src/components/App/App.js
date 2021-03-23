import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import HomePage from "../../pages/home/HomePage";
import AanbodPage from "../../pages/aanbod/AanbodPage";
import VraagPage from "../../pages/vraag/VraagPage";
import ContactPage from "../../pages/contact/ContactPage";
import LoginPage from "../../pages/login/LoginPage";
import Header from "../HeaderGeneral/Header";
import './App.css';

function App() {
  return (
    <Router>
        <Header />
            <main className="main-content">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/aanbod">
                        <AanbodPage />
                    </Route>
                    <Route path="/vraag">
                        <VraagPage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                    <Route path="/inloggen">
                        <LoginPage />
                    </Route>
                </Switch>
            </main>
    </Router>
  );
};

export default App;
