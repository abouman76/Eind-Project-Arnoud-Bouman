import React from "react";
import {useForm} from "react-hook-form";
import "./Register.css";

const Register = () => {

    const {register} = useForm();

    const handleClick = () => {
        return alert("Registered!")
    }
    return(
        <div className="main-register">
            <form className="register-form">
                <div className="input-form">
                    <input type="text" name="firstName" id="first-name" placeholder="uw voornaam" ref={register}/>
                    <input type="text" name="lastName" id="last-name" placeholder="uw achternaam" ref={register}/>
                </div>
                <div className="input-form">
                    <input type="text" name="street" id="street-details" placeholder="uw straat + huisnummer" ref={register}/>
                    <input type="text" name="city" id="city-details" placeholder="uw postcode + woonplaats" ref={register}/>
                </div>
                <div className="input-form">
                    <input type="text" name="age" id="age-details" placeholder="uw leeftijd" ref={register}/>
                    <input type="text" name="phone" id="phone-details" placeholder="uw telefoonnummer" ref={register}/>
                </div>
                <div className="input-form">
                    <input type="text" name="email" id="email-details" placeholder="uw e-mailadres" ref={register}/>
                    <input type="text" name="username" id="user-details" placeholder="uw gebruikersnaam" ref={register}/>
                </div>
                <div className="input-form">
                    <input type="text" name="password" id="psw-details" placeholder="uw wachtwoord" ref={register}/>
                    <input type="text" name="checkPassword" id="check-psw-details" placeholder="herhaal wachtwoord" ref={register}/>
                </div>
                <button className="btn-register" type="submit" onClick={handleClick}>registreer</button>

            </form>
        </div>

    )
}

export default Register;