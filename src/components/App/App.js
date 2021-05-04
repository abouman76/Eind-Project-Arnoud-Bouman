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
import MyAds from "../../pages/MyAds/MyAds"
import ProfilePage from "../../pages/profile/ProfilePage";
import Footer from "../Footer/Footer";
import styles from './App.module.css';
import SignUpPage from "../../pages/registration/SignUpPage";
import NavBar from "../Navbar/NavBar";
import PictureHeader from "../PictureHeader/PictureHeader";

function App() {
  return (
    <Router>
        <NavBar/>
        <PictureHeader/>
            <main className={styles["main-content"]}>
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
                        <MyAds />
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
