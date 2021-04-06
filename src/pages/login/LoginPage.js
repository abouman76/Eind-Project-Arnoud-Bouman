import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import Login from "../../components/Login/Login";
import "./LoginPage.css";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const userLogin = {
        userName: "Tester Login",
        password: "login123",
        // email: "login@login.com"
    }

    const [user, setUser] = useState({userName: "", password: ""});
    const [error, setError] = useState();

    const history = useHistory();

    const loginPerson = (details) => {
        console.log(details);
        if(details.userName === userLogin.userName && details.password === userLogin.password) {
            console.log("Logged in");
            setUser({
                userName: details.userName,
                password: details.password
            })
        } else {
            console.log("Onbekende gegevens!");
            setError("Onbekende gegevens!");
        }
    }

    // const logOut = () => {
    //     console.log("Logout");
    // }

    return (
        <>
            <PictureHeader />
            <div className="loginPage-container">
                <div className="pop-up">
                    {(user.userName !=="") ? (<h4>Welkom, {user.userName}</h4>) : history.push("/inloggen")}
                </div>

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
