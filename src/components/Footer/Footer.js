import React from "react";
import {Link} from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles["footer-container"]}>
            <div className={styles.footer}>
                <div className={styles["footer-links"]}>
                    <Link to="/contact">Contact</Link>
                    <Link to="/">Gegevens</Link>
                </div>
                <div className={styles["footer-text"]}>
                    <h4>Copyright 2021 - sociaaloosterhout.nl</h4>
                    <p>Designed by: Your Friendly Neightbourhood Developer</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;