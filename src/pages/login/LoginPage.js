import React from "react";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import Login from "../../components/Login/Login";
import styles from  "./LoginPage.modules.css";
import BtnCtaSignUp from "../../components/Buttons/BtnCtaSignUp";

const LoginPage = () => {
    return (
        <>
            <PictureHeader />
            <div className={styles["loginPage-container"]}>
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
