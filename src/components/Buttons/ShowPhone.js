import React, {useState} from "react";
import "./ShowPhone.css";

const ShowPhone = (props) => {

    const [phoneNumber, setPhoneNumber] = useState(false);

    const onClickPhoneHandler = () => {
        setPhoneNumber(props.phone)
    }

    return (
        <button className="btn-phone" type="button" onClick={onClickPhoneHandler}>toon nummer</button>
    )
}
export default ShowPhone;