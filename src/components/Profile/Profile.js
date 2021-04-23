import React from "react";
import "./Profile.css";

// Firebase Config:
import app from "../../modules/Firebase";
// const db = app.firestore();

const Register = (props) => {

    // console.log("Profile PROPS", props);
    //
    // // let userId = Object.keys(props.profile)[0]
    //
    // console.log("Profile UID");

    return(
        <div className="main-register">
            <form className="register-form" >
                <div className="input-form">
                    <div className="display-error">
                        <input
                            type="text"
                            name="firstName"
                            id="first-name"
                            // value={props.profile["7Dbpg8yEarWQkWTvsZ9hyPZpmrr2"].firstName}
                            placeholder="uw voornaam"
                        />
                    </div>
                    <div className="display-error">
                        <input
                            type="text"
                            name="lastName"
                            id="last-name"
                            placeholder="uw achternaam"
                        />
                    </div>
                </div>
                <div className="input-form">
                    <div className="display-error">
                        <input
                            type="text"
                            name="street"
                            id="street-details"
                            placeholder="uw straat + huisnummer"
                        />
                    </div>
                    <div className="display-error">
                        <input
                            type="text"
                            name="city"
                            id="city-details"
                            placeholder="uw postcode + woonplaats"
                        />
                    </div>
                </div>

                <div className="input-form">
                    <div className="display-error">
                        <input
                            type="text"
                            name="age"
                            id="age-details"
                            placeholder="uw leeftijd"
                        />
                    </div>
                    <div className="display-error">
                        <input
                            type="text"
                            name="phone"
                            id="phone-details"
                            placeholder="uw telefoonnummer"
                        />
                    </div>
                </div>
                <div className="input-form">
                    <div className="display-error">
                        <input
                            type="email"
                            name="email"
                            id="email-details"
                            placeholder="uw e-mailadres"
                        />
                    </div>
                    <div className="display-error">
                        <input
                            type="text"
                            name="username"
                            id="user-details"
                            placeholder="uw gebruikersnaam"
                        />
                    </div>
                </div>
                <button className="btn-register"
                        type="submit"
                >opslaan
                </button>
            </form>
        </div>

    )
}

export default Register;