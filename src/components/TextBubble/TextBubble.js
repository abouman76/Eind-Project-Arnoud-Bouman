import React from "react";
import "./TextBubble.css";

const TextBubble = () => {
    return (
        <div className="main-container">

            <div className="text-bubble">
                <div className="header-review">
                    <h2>Ervaring Buurtbewoner</h2>
                </div>
                <span className="review-text">
            <p>Hier kan de buurtbewoner zijn of haar ervaring delen!</p>
        </span>
            </div>
            <span className="name-reviewer">
        <p>Naam buurtbewoner</p>
    </span>

        </div>
    )
}

export default TextBubble