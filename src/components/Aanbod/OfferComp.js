import React from "react";
import "./OfferComp.css";

const OfferComp = () => {
    return (
        <div className="main-offer">
            <form className="offer-form">
                <div className="header-offer">"Welke aanbod - Onderwerp"</div>
                <div className="input-offer">
                    <input type="text" placeholder="datum:"/>
                    <input type="text" placeholder="actief - non actief"/>
                </div>
                <div className="input-offer">
                <textarea
                    name="text"
                    id="text-details"
                    rows="10"
                    cols="40"
                >Wat is uw aanbod?
                </textarea>
                </div>
                <div className="input-person">
                    <input type="text" placeholder="Aangeboden door:"/>
                </div>
                <div className="buttons">
                    <button className="btn-offer" type="button">stuur bericht</button>
                    <button className="btn-offer" type="button">toon nummer</button>
                </div>

            </form>
        </div>
    )
}

export default OfferComp;