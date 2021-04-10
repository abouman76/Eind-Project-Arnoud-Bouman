import React, { useState} from "react";
import "./Login.css"
import BtnLogin from "../Buttons/BtnLogin";

const Login = ({loginPerson, error}) => {
    const [details, setDetails] = useState({userName: "", password: ""});
    // console.log("Wat is loginPerson", loginPerson);

    const loginHandler = (e) => {
        e.preventDefault();
        loginPerson(details);
    }

    return (
        <div className="main-login">
            <form onSubmit={loginHandler} className="form-login">
                {(error !== "") ? (<span>{error}</span>) : ""}
                <div className="form-group">
                    <label htmlFor="input-name" className="input-fields">uw gebruikersnaam</label>
                        <input type="text"
                               name="username"
                               id="input-name"
                               placeholder="voer gebruikersnaam in"
                               onChange={ e => setDetails ({...details, userName: e.target.value})}
                               value={details.userName}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="input-password" className="input-fields">uw wachtwoord</label>
                    <input type="text"
                           name="password"
                           id="input-password"
                           placeholder="voer wachtwoord in"
                           onChange={ e => setDetails ({...details, password: e.target.value})}
                           value={details.password}
                    />
                </div>
                <div className="btn-login">
                    <BtnLogin loginHandler={loginHandler} />
                </div>
            </form>

        </div>
    )
}

export default Login