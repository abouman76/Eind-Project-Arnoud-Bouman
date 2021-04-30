import React from "react";
import styles from "./BtnLogin.module.css"

const BtnLogin = () => {
    return (
        <div className={styles["send-button-cta"]}>
            <button className={styles["login-cta"]} type="submit">Inloggen</button>
        </div>
    )
}

export default BtnLogin;