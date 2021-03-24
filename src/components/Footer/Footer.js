import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-links">
                    <Link to="/contact">Contact</Link>
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