import React from "react";
import "./Login.css"
import BtnLogin from "../Buttons/BtnLogin";

const Login = () => {
    return (
        <div className="main-login">
            <form className="form-login">
                <div className="form-group">
                    <label htmlFor="input-name" className="input-fields">uw gebruikersnaam</label>
                        <input type="text"
                               name="username"
                               id="input-name"
                               placeholder="voer gebruikersnaam in"
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="input-password" className="input-fields">uw wachtwoord</label>
                    <input type="text"
                           name="password"
                           id="input-password"
                           placeholder="voer wachtwoord in"
                    />
                </div>
                <div className="btn-login">
                    <BtnLogin />
                </div>
            </form>

        </div>
    )
}

export default Login