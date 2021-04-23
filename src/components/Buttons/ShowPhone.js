import React, {useState} from "react";
import "./ShowPhone.css";

const ShowPhone = (props) => {

    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    const onClickPhoneHandler = () => {
        setShowPhoneNumber(!showPhoneNumber);

    }

    return (
        <button
            className="btn-phone"
            type="button"
            onClick={onClickPhoneHandler}
        >
            {showPhoneNumber? props.phone : "toon nummer"}
        </button>
    )
};
export default ShowPhone;