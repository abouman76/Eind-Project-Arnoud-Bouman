import React, {useEffect, useState} from "react";
import styles from "./ProfilePage.module.css";
import Profile from "../../components/Profile/Profile";
import {useAuth} from "../../helper/LoginContext";

// Firebase Config:
import app from "../../modules/Firebase";

const ProfilePage = () => {

    const {authUser} = useAuth();

    const [profile, setProfile] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, []);

    useEffect(() => {

        async function fetchData() {

            const userProfiel = (await app.firestore().collection("userInformation-new").doc(authUser.uid).get()).data()
            setProfile(userProfiel);

        }
        if(authUser) {
            fetchData();
        }

    }, [authUser]);

    return (
        <>
            <div className={styles["profile-wrapper"]}>
                <main className={styles["main-profile-page"]}>
                    <h2>Welkom {profile.firstName}</h2>
                    <p>Jouw profiel gegevens staan hieronder weergegeven.</p>
                </main>
                {loading ===  false ? (
                <div className={styles["container-profile-component"]}>
                    <Profile
                        profile={profile}
                    />
                </div>
                ) : (<div className={styles.loader}><h3>Gegevens worden opgehaald...</h3></div>) }
            </div>
        </>
    )
}

export default ProfilePage;