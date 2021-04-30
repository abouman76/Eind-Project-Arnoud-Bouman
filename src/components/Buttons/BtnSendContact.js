import React from "react";
import styles from "./BtnSendContact.module.css"

const BtnSendContact = () => {

    return (
        <div className={styles["send-button-cta"]}>
            <button className={styles["send-cta"]} type="submit">Verzenden</button>
        </div>
    )
}

export default BtnSendContact;