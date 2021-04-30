import React from "react";
import Register from "../../components/Register/Register";
import styles from "./SignUpPage.module.css";
import PictureHeader from "../../components/PictureHeader/PictureHeader";

const SignUpPage = () => {
    return (
        <>
            <PictureHeader/>
            <div className={styles["sign-up-wrapper"]}>
                <main className={styles["main-SignUp-Page"]}>
                    <h1>Registratie</h1>
                    <p>Registreer u hier voor "Sociaal Oosterhout"</p>
                </main>
                <div className={styles["signUp-comp"]}>
                    <Register />
                </div>
            </div>

        </>

    )
}

export default SignUpPage;