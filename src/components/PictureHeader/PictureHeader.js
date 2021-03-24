import React from "react";
import brug from "../../assets/brug.png";
import waalbrug from "../../assets/waalbrug.jpeg"

import "./PictureHeader.css";

const PictureHeader = () => {
    return (
        <div className="top-image">
            {/*<img src={brug} alt="Waalbrug"/>*/}
            <img src={waalbrug} alt="Waalbrug"/>
        </div>
    )
};

export default PictureHeader;