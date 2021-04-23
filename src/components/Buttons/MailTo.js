import React from "react";
import {Link} from "react-router-dom";
import "./MailTo.css";

const MailTo = ({mailto, label}) => {
    return (
        <Link className="btn-mail"
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
            >
            {label}
        </Link>
    );
};

export default MailTo;