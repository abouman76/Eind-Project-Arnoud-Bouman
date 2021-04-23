import React, {useEffect, useState} from "react";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import "./ProfilePage.css";
import Profile from "../../components/Profile/Profile";

// Firebase Config:
import app from "../../modules/Firebase";


const ProfilePage = () => {

    // const [register, setRegister] = useState([]);
    // const [profile, setProfile] = useState({});
    //
    // useEffect(() => {
    //
    //     async function fetchData() {
    //
    //         const profileRegistration = await app.firestore().collection("userInformation-new").get()
    //         let userData = {
    //
    //         }
    //
    //         profileRegistration.docs.forEach(doc => {
    //             userData[doc.id] = doc.data();
    //             console.log("DOC 1", doc.data())
    //         });
    //
    //         setProfile(userData);

            // const userRegistration = await app.firestore().collection("userInformation-new").get()
            // setRegister(userRegistration.docs.map(doc => doc.data()));
            // console.log("REG", userRegistration.docs.map(doc => doc.data()));
    //
    //     }
    //     fetchData();
    //
    // }, []);

    return (
        <>
            <PictureHeader/>
            <main className="main-profile-page">
                <h2> Uw gebruikers profiel</h2>
                <p>Op deze pagina kunt u uw gegevens aanpassen</p>
            </main>
            <div className="container-profile-component">
                <Profile
                    // profile={profile}
                />
            </div>

        </>

    )
};

export default ProfilePage;