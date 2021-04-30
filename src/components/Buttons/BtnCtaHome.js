import React from "react";
import { Link } from "react-router-dom";
import styles from "./BtnCtaHome.module.css"

const BtnCtaHome = () => {
    return (
            <Link to="/aanbod" className={styles["main-cta"]}>Check het aanbod snel!</Link>
    )
};

export default BtnCtaHome