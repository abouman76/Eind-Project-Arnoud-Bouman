import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-links">
                    <a href="/">Contact</a>
                    <a href="/">Gegevens</a>
                </div>
                <div className="footer-text">
                    <h4>Copyright 2021 - sociaaloosterhout.nl</h4>
                    <p>Designed by: Your Friendly Neightbourhood Developer</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;