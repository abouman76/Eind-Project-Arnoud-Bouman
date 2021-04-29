import React from "react";
import Register from "../../components/Register/Register";
import "./SignUpPage.css";
import PictureHeader from "../../components/PictureHeader/PictureHeader";

const SignUpPage = () => {
    return (
        <>
            <PictureHeader/>
            <div className="sign-up-wrapper">
                <main className="main-SignUp-Page">
                    <h1>Registratie</h1>
                    <p>Registreer u hier voor "Sociaal Oosterhout"</p>
                </main>
                <div className="signUp-comp">
                    <Register />
                </div>
            </div>

        </>

    )
}

export default SignUpPage;