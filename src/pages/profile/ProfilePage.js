import React from "react";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import "./ProfilePage.css";
import Profile from "../../components/Profile/Profile";

// Firebase Config:
import app from "../../modules/Firebase";
const db = app.firestore();


const ProfilePage = () => {

    // const docRef = db.collection("userInformation").doc(test);
    // docRef.get().then((doc) => {
    //     if(doc.exists) {
    //         console.log("DOC Data", doc.data());
    //
    //     } else {
    //         console.log("No doc found");
    //     }
    // })

    return (
        <>
            <PictureHeader/>
            <main className="main-profile-page">
                <h2> Uw gebruikers profiel</h2>
                <p>Op deze pagina kunt u uw gegevens aanpassen</p>
            </main>
            <div className="container-profile-component">
                <Profile />
            </div>

        </>

    )
}

export default ProfilePage;