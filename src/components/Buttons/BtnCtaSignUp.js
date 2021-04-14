import React from "react";
import { Link } from "react-router-dom";
import "./BtnCtaSignUp.css";

const BtnCtaSignUp = () => {
    return (
        <Link to="/registreren">
            <button className="main-cta-signUp" type="button">registreer u hier</button>
        </Link>
    )
}

export default BtnCtaSignUp;