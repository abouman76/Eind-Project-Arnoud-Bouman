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
import AdvertisementPage from "../../pages/advertisement/AdvertisementPage"
import ProfilePage from "../../pages/profile/ProfilePage";
// import Header from "../HeaderGeneral/Header";
import Footer from "../Footer/Footer";
import './App.css';
import SignUpPage from "../../pages/registration/SignUpPage";
import HeaderPersonal from "../HeaderPersonal/HeaderPersonal";

function App() {
  return (
    <Router>
        {/*<Header />*/}
        <HeaderPersonal/>
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
                    <Route path="/plaats">
                        <AdvertisementPage />
                    </Route>
                    <Route path="/registreren">
                        <SignUpPage />
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
