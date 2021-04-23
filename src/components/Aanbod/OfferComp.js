import React from "react";
import "./OfferComp.css";
import MailTo from "../Buttons/MailTo";
import ShowPhone from "../Buttons/ShowPhone";

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
                    <MailTo
                        label="Stuur Bericht"
                        mailto={`mailto:${props.email}`}
                    />
                    <ShowPhone />
                    {/*<button className="btn-offer-message" type="button">stuur bericht</button>*/}
                    {/*<button className="btn-offer-phone" type="button">toon nummer*/}
                    {/*    <span className="tooltip-text">{props.phone}</span>*/}
                    {/*</button>*/}
                </div>

            </form>
        </div>
    )
}

export default OfferComp;