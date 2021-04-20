import React from "react"
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import MyAdComponent from "../../components/MyAdComponent/MyAdComponent";
import "./MyAdd.css";

const MyAdd = () => {
    return (
        <>
            <PictureHeader />
            <div className="my-ad-header">
                <h3> Heeft u iets aan te bieden of te vragen? Maak dan hieronder uw advertentie</h3>
            </div>
            <MyAdComponent />
        </>

    )
}

export default MyAdd;