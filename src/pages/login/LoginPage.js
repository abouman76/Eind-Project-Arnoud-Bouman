import React from "react";
import Login from "../../components/Login/Login";
import styles from "./LoginPage.module.css";
import BtnCtaSignUp from "../../components/Buttons/BtnCtaSignUp";

const LoginPage = () => {
    return (
        <>
            <div className={styles["login-page-container"]}>
                <div className={styles["main-text"]}>
                    <p>Nieuw hier? Registreer u dan.</p>
                    <BtnCtaSignUp/>
                </div>
                <Login />
            </div>


        </>

    )
}

export default LoginPage;
