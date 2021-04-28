import React from "react";
import "./MailTo.css";

const MailTo = ({mailto, title}) => {
    return (
        <a className="btn-mail"
           href={`${mailto}?subject=${title}`}
            >
            stuur email
        </a>
    );
};

export default MailTo;