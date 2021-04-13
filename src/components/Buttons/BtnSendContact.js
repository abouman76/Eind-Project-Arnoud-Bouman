import React from "react";
import "./BtnSendContact.css"

const BtnSendContact = () => {
    const handleOnKeyPress = (event) => {
        //console.log("PRESSED Enter", event);
        if(event.onKeyPress === "enter") {

        }
    }
    return (
        <div className="send-button-cta">
            <button className="send-cta" type="submit">Verzenden</button>
            {/*<button className="send-cta" type="submit" onClick={() => alert("You clicked me!")}>Verzenden</button>*/}
        </div>
    )
}

export default BtnSendContact;