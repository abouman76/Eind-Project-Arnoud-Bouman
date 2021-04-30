import React, {useState} from "react";
import styles from "./ShowPhone.module.css";

const ShowPhone = (props) => {

    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    const onClickPhoneHandler = () => {
        setShowPhoneNumber(!showPhoneNumber);

    }

    return (
        <button
            className={styles["btn-phone"]}
            type="button"
            onClick={onClickPhoneHandler}
        >
            {showPhoneNumber? props.phone : "toon nummer"}
        </button>
    )
};
export default ShowPhone;