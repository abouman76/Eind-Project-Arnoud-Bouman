import React from "react";
import "./BtnLogin.css"

const BtnLogin = (props) => {
    const handleOnKeyPress = (event) => {
        // console.log("PRESSED Enter", event);
        if(event.onKeyPress === "enter") {

        }
    }
    return (
        <div className="send-button-cta">
            <button className="login-cta" type="submit" onClick={props.loginHandler}>Inloggen</button>
        </div>
    )
}

export default BtnLogin;