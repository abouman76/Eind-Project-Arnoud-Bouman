import React, {useEffect, useState} from "react";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import "./ProfilePage.css";
import Profile from "../../components/Profile/Profile";
import {useAuth} from "../../helper/LoginContext";

// Firebase Config:
import app from "../../modules/Firebase";

const ProfilePage = () => {

    const {authUser} = useAuth();
    console.log("PROF", authUser);

    const [profile, setProfile] = useState({});

    useEffect(() => {

        async function fetchData() {
            console.log("UID Fetch", authUser.uid);

            const userProfiel = (await app.firestore().collection("userInformation-new").doc(authUser.uid).get()).data()
            // console.log("userProf", userProfiel);
            setProfile(userProfiel);

        }
        if(authUser) {
            fetchData();
        }

    }, [authUser]);

    return (
        <>
            <PictureHeader/>
            <main className="main-profile-page">
                <h2>Welkom {profile.firstName}</h2>
                <p>Jouw profiel gegevens staan hieronder weergegeven.</p>
            </main>
            <div className="container-profile-component">
                <Profile
                    profile={profile}
                />
            </div>

        </>

    )
};

export default ProfilePage;