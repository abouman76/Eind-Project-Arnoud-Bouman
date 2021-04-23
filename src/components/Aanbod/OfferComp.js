import React from "react";
import "./OfferComp.css";

const OfferComp = (props) => {

    return (
        <div className="main-offer">
            <form className="offer-form">
                <div className="header-offer">{props.title}</div>
                <div className="input-offer">
                    <input type="text"
                           value={props.date}
                        // placeholder="datum:"
                    />
                    <input type="text" placeholder="actief - non actief"/>
                </div>
                <div className="input-offer">
                <textarea
                    name="text"
                    id="offer"
                    rows="10"
                    cols="40"
                >{props.description}
                </textarea>
                </div>
                <div className="input-person">
                    <input
                        type="text"
                        value={props.name}
                        // placeholder="Aangeboden door:"
                    />
                </div>
                <div className="buttons">
                    <button className="btn-offer-message" title={props.email} type="button">stuur bericht</button>
                    <button className="btn-offer-phone" title={props.phone} type="button">toon nummer</button>
                </div>

            </form>
        </div>
    )
}

export default OfferComp;