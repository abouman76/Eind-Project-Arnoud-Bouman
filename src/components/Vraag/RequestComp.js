import React from "react";

import "./RequestComp.css";
import MailTo from "../Buttons/MailTo";
import ShowPhone from "../Buttons/ShowPhone";

const RequestComp = (props) => {

    return (
        <div className="main-request">
            <form className="request-form">
                <div className="header-request">{props.title}</div>
                <div className="input-request">
                    <input type="text"
                           value={props.date}
                           readOnly={true}
                           // placeholder="datum:"
                    />
                    <input type="text" placeholder="actief - non actief"/>
                </div>
                <div className="input-request">
                <textarea
                    name="text"
                    id="details-request"
                    rows="10"
                    cols="46"
                    readOnly={true}
                    value={props.description}
                >
                </textarea>
                </div>
                <div className="input-person">
                    <input
                        type="text"
                        value={props.name}
                        readOnly={true}
                        // placeholder="gevraagd door:"
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

export default RequestComp;