import React from "react";
import styles from "./OfferComp.module.css";
import MailTo from "../Buttons/MailTo";
import ShowPhone from "../Buttons/ShowPhone";

const OfferComp = (props) => {

    return (
        <div className={styles["main-offer"]}>
            <form className={styles["offer-form"]}>
                <div className={styles["header-offer"]}>{props.title}</div>
                <div className={styles["input-offer"]}>
                    <input type="text"
                           value={props.date}
                           readOnly={true}
                        // placeholder="datum:"
                    />
                    <input type="text" placeholder="actief - non actief"/>
                </div>
                <div className={styles["input-offer"]}>
                <textarea
                    name="text"
                    id="offer"
                    rows="10"
                    cols="46"
                    value={props.description}
                    readOnly={true}
                >
                </textarea>
                </div>
                <div className={styles["input-person"]}>
                    <input
                        type="text"
                        value={props.name}
                        readOnly={true}
                        // placeholder="Aangeboden door:"
                    />
                </div>

                <div className={styles["buttons"]}>
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