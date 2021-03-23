import React from "react";
import { Link } from "react-router-dom";
import "./BtnCtaHome.css"

const BtnCtaHome = () => {

    return (
            <Link to="/aanbod">
                <button className="main-cta" type="button">check het aanbod snel!</button>
            </Link>
    )
}

export default BtnCtaHome