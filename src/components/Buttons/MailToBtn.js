import React from "react";
import { Link} from "react-router-dom";

const MailToBtn = ({mailto}) => {
    return (
        <button className="btn-email">
            <Link
                onClick={(e) => {
                    window.location = mailto;
                    e.preventDefault();
                }}
            >
            </Link>
        </button>

    )
};

export default MailToBtn