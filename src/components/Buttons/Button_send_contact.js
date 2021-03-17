import React from "react";
import "./Button-send-contact.css"

const Button_send_contact = () => {
    return (
        <div className="send-button-cta">
            <button className="send-cta" type="button" onClick={() => alert("You clicked me!")}>Verzenden</button>
        </div>
    )
}

export default Button_send_contact;