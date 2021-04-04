import React from "react";
// import { NavLink } from "react-router-dom";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import Login from "../../components/Login/Login";
import "./LoginPage.css";

const LoginPage = () => {
    return (
        <>
            <PictureHeader />
            <div className="loginPage-container">

                <div className="main-text">
                    <h1>Inloggen</h1>
                    <p>Nieuw hier? Registreer u hier => hyperlink naar registratiepagina</p>
                </div>

                <Login />
            </div>


        </>

    )
}

export default LoginPage;
