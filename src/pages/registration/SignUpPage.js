import React from "react";
import Register from "../../components/Register/Register";
import "./SignUpPage.css";
import PictureHeader from "../../components/PictureHeader/PictureHeader";

const SignUpPage = () => {
    return (
        <>
            <PictureHeader/>
            <main className="main-SignUp-Page">
                <h1>Registratie</h1>
                <p>Registreer u hier voor "Sociaal Oosterhout"</p>
            </main>
            <div className="signUp-comp">
                <Register />
            </div>
        </>

    )
}

export default SignUpPage;