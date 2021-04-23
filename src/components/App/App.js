import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import HomePage from "../../pages/home/HomePage";
import OfferPage from "../../pages/aanbod/OfferPage";
import RequestPage from "../../pages/vraag/RequestPage";
import ContactPage from "../../pages/contact/ContactPage";
import LoginPage from "../../pages/login/LoginPage";
import MyAdd from "../../pages/myAdd/MyAdd"
import ProfilePage from "../../pages/profile/ProfilePage";
import Footer from "../Footer/Footer";
import './App.css';
import SignUpPage from "../../pages/registration/SignUpPage";
import NavBar from "../Navbar/NavBar";

function App() {
  return (
    <Router>
        <NavBar/>
            <main className="main-content">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/aanbod">
                        <OfferPage />
                    </Route>
                    <Route path="/vraag">
                        <RequestPage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                    <Route path="/registreren">
                        <SignUpPage />
                    </Route>
                    <Route path="/plaats">
                        <MyAdd />
                    </Route>
                    <Route path="/profiel">
                        <ProfilePage />
                    </Route>
                    <Route path="/inloggen">
                        <LoginPage />
                    </Route>
                </Switch>
            </main>
        <Footer />
    </Router>
  );
};

export default App;
