import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";
import "./Login.css"
import BtnLogin from "../Buttons/BtnLogin";
import {useAuth} from "../../helper/LoginContext";




const Login = () => {
    const { handleSubmit, register, formState: {errors} } = useForm();

    const {setIsAuthenticated, fireBaseError, login} = useAuth();

    const history = useHistory();

    const [appUser, setAppUser] = useState(undefined);

    const loginHandler = async (data) => {

        const response = await login(data);
        setAppUser(response.user);
        history.push("/profiel");
        console.log("Login Response", response.user)
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