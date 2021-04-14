import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css"
import BtnLogin from "../Buttons/BtnLogin";

const Login = () => {
    const { handleSubmit, register, formState: {errors} } = useForm();

    const loginHandler = (data) => {
        console.log(data);
    }

    return (
        <div className="main-login">
            <form onSubmit={handleSubmit(loginHandler)} className="form-login">
                <div className="form-group">
                    <label htmlFor="username" className="input-fields">uw gebruikersnaam</label>
                        <input type="text"
                               name="username"
                               id="username"
                               placeholder="voer gebruikersnaam in"
                               {...register("username", { required: true })}
                               aria-invalid={errors.username ? "true" : "false"}
                        />
                    {errors.username && <p role="alert">Verplicht veld</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="passWordInput" className="input-fields">uw wachtwoord</label>
                    <input type="password"
                           name="passWordInput"
                           id="passWordInput"
                           placeholder="voer wachtwoord in"
                           aria-invalid={errors.passwordInput ? "true" : "false"}
                           {...register("passWordInput", { required: true })}
                    />
                    {errors.passWordInput && <p role="alert">Verplicht veld</p>}
                </div>

                <button type="submit">TEST BTN......</button>

                <div className="btn-login">
                    <BtnLogin loginHandler={loginHandler} />
                </div>
            </form>
        </div>
    )
}

export default Login