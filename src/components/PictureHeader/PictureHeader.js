import React from "react";
import waalbrug from "../../assets/waalbrug.jpeg"

import styles from "./PictureHeader.module.css";

const PictureHeader = () => {
    return (
        <header className={styles["top-image"]}>
            <img src={waalbrug} alt="Waalbrug"/>
        </header>
    )
}

export default PictureHeader;