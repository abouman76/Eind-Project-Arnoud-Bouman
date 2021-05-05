import React from "react"
import MyAdComponent from "../../components/MyAdComponent/MyAdComponent";
import styles from "./MyAds.module.css";

const MyAds = () => {
    return (
        <>
            <div className={styles["ad-wrapper"]}>
                <div className={styles["my-ad-header"]}>
                    <h2> Heeft u iets aan te bieden of te vragen?</h2>
                    <p>Maak dan hieronder uw advertentie</p>
                </div>
                <MyAdComponent />
            </div>
        </>
    )
}

export default MyAds;