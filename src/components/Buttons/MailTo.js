import React from "react";
import styles from "./MailTo.module.css";

const MailTo = ({mailto, title}) => {
    return (
        <a className={styles["btn-mail"]}
           href={`${mailto}?subject=${title}`}
            >
            stuur email
        </a>
    );
}

export default MailTo;