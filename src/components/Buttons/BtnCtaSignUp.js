import React from "react";
import { Link } from "react-router-dom";
import styles from "./BtnCtaSignUp.module.css";

const BtnCtaSignUp = () => {
    return (
        <Link to="/registreren">
            <button className={styles["main-cta-signUp"]} type="button">registreer</button>
        </Link>
    )
}

export default BtnCtaSignUp;