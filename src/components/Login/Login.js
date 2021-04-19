import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";
import "./Login.css"
import BtnLogin from "../Buttons/BtnLogin";

// Firebase Config:
import app from "../../modules/Firebase";
// const db = app.firestore();

const Login = () => {
    const { handleSubmit, register, formState: {errors} } = useForm();

    const history = useHistory();

    const [appUser, setAppUser] = useState(undefined);
    const [fireBaseError, setFireBaseError] = useState("")

    const loginHandler = async (data) => {
        // console.log("DATA:" , data.email, data.password);
        try { const response = await app.auth().signInWithEmailAndPassword(data.email, data.password);
            console.log("LOGIN Response", response);
            setAppUser(response.user);

            history.push("/profiel");

        } catch (e) {
            console.error("ERROR", e.message);
            setFireBaseError(e.message);
        }

    }

    return (
        <div className="main-login">
            <form onSubmit={handleSubmit(loginHandler)} className="form-login">
                <div className="header-login">
                    <h1>Inloggen</h1>
                </div>
                <div className="form-group">
                    <label htmlFor="email-input" className="input-fields">uw e-mail</label>
                        <input type="email"
                               name="email"
                               id="email-input"
                               placeholder="voer e-mailadres in"
                               {...register("email", {required: true})}
                               aria-invalid={errors.email ? "true" : "false"}
                        />
                    {errors.email && <p role="alert">Verplicht veld</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="passWordInput" className="input-fields">uw wachtwoord</label>
                    <input type="password"
                           name="password"
                           id="passWordInput"
                           placeholder="voer wachtwoord in"
                           aria-invalid={errors.password ? "true" : "false"}
                           {...register("password", { required: true })}
                    />
                    {errors.password && <p role="alert">Verplicht veld</p>}
                </div>
                <div className="form-group">
                    <p>{fireBaseError}</p>
                </div>
                <div className="btn-login">

                    <BtnLogin />
                </div>
            </form>
        </div>
    )
};

export default Login