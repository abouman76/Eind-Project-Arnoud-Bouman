import React from "react";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import Login from "../../components/Login/Login";
import "./LoginPage.css";
import BtnCtaSignUp from "../../components/Buttons/BtnCtaSignUp";

const LoginPage = () => {
    return (
        <>
            <PictureHeader />
            <div className="loginPage-container">
                <div className="main-text">
                    <p>Nieuw hier? Registreer u dan.</p>
                    <BtnCtaSignUp/>
                </div>
                <Login />
            </div>


        </>

    )
}

export default LoginPage;
