import React, {useEffect} from "react";
import "./Request.css";

const Request = (props) => {

    return (
        <div className="main-request">
            <form className="request-form">
                <div className="header-request">{props.title}</div>
                <div className="input-request">
                    <input type="text"
                           value={props.date}
                           // placeholder="datum:"
                    />
                    <input type="text" placeholder="actief - non actief"/>
                </div>
                <div className="input-request">
                <textarea
                    name="text"
                    id="details-request"
                    rows="10"
                    cols="40"
                >{props.description}
                </textarea>
                </div>
                <div className="input-person">
                    <input type="text" placeholder="gevraagd door:"/>
                </div>
                <div className="buttons">
                    <button className="btn-request" type="button">stuur bericht</button>
                    <button className="btn-request" title={props.phone} type="button">toon nummer</button>
                </div>

            </form>
        </div>
    )
}

export default Request;