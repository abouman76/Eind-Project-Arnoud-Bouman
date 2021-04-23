import React from "react";
import "./MailTo.css";

const MailTo = ({mailto, title}) => {
    return (
        <a className="btn-mail"
           href={`${mailto}?subject=${title}`}
            >
            stuur bericht
        </a>
    );
};

export default MailTo;