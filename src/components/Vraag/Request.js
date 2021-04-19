import React from "react";
import "./Request.css";

const Request = () => {
    return (
        <div className="main-request">
            <form className="request-form">
                <div className="header-request">"Welke vraag - Onderwerp"</div>
                <div className="input-request">
                    <input type="text" placeholder="datum:"/>
                    <input type="text" placeholder="actief - non actief"/>
                </div>
                <div className="input-request">
                <textarea
                    name="text"
                    id="text-details"
                    rows="10"
                    cols="40"
                >Wat is uw vraag?
                </textarea>
                </div>
                <div className="input-person">
                    <input type="text" placeholder="gevraagd door:"/>
                </div>
                <div className="buttons">
                    <button className="btn-request" type="button">stuur bericht</button>
                    <button className="btn-request" type="button">toon nummer</button>
                </div>

            </form>
        </div>
    )
}

export default Request;