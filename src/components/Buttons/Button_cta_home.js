import React from "react";
import "./Button_cta_home.css"

const Button_cta_home = () => {
    return (
        <div className="main-button-cta">
            <button className="main-cta" type="button" onClick={() => alert("You clicked me!")}>check het aanbod snel</button>
        </div>
    )
}

export default Button_cta_home