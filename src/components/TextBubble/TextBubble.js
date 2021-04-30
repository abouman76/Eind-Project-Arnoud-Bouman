import React from "react";
import styles from "./TextBubble.module.css";

const TextBubble = () => {
    return (
        <div className={styles["main-container"]}>

            <div className={styles["text-bubble"]}>
                <div className={styles["header-review"]}>
                    <h2>Ervaring Buurtbewoner</h2>
                </div>
                <span className={styles["review-text"]}>
            <p>Hier kan de buurtbewoner zijn of haar ervaring delen!</p>
        </span>
            </div>
            <span className={styles["name-reviewer"]}>
        <p>Naam buurtbewoner</p>
    </span>

        </div>
    )
}

export default TextBubble