import React from "react";

import styles from "./RequestComp.module.css";
import MailTo from "../Buttons/MailTo";
import ShowPhone from "../Buttons/ShowPhone";

const RequestComp = (props) => {

    return (
        <div className={styles["main-request"]}>
            <form className={styles["request-form"]}>
                <div className={styles["header-request"]}>{props.title}</div>
                <div className={styles["input-request"]}>
                    <input type="text"
                           value={props.date}
                           readOnly={true}
                    />
                    <input type="text" placeholder="actief - non actief"/>
                </div>
                <div className={styles["input-request"]}>
                <textarea
                    name="text"
                    rows="10"
                    cols="46"
                    readOnly={true}
                    value={props.description}
                >
                </textarea>
                </div>
                <div className={styles["input-person"]}>
                    <input
                        type="text"
                        value={props.name}
                        readOnly={true}
                    />
                </div>
                <div className={styles.buttons}>
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