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
                           readOnly={true}
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
                    readOnly={true}
                >{props.description}
                </textarea>
                </div>
                <div className="input-person">
                    <input
                        type="text"
                        value={props.name}
                        readOnly={true}
                        // placeholder="Aangeboden door:"
                    />
                </div>

                <div className="buttons">
                    <MailTo
                        mailto={`mailto:${props.email}`}
                        title={props.title}
                    />
                    <ShowPhone
                        phone={props.phone}
                    />
                </div>

            </form>
        </div>
    )
}

export default OfferComp;