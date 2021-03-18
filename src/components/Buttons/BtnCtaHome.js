import React from "react";
import "./BtnCtaHome.css"

const BtnCtaHome = () => {
    return (
        <div className="main-button-cta">
            <button className="main-cta" type="button" onClick={() => alert("You clicked me!")}>check het aanbod snel</button>
        </div>
    )
}

export default BtnCtaHome