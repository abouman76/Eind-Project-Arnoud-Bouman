import React from "react";
import styles from "./Profile.module.css";

const Profile = (props) => {

    return(
        <div className={styles["main-profile"]}>
            <form className={styles["profile-form"]}>
                <div className={styles["input-form"]}>
                    <div className={styles["display-error"]}>
                        <input
                            type="text"
                            name="firstName"
                            id="first-name"
                            value={props.profile.firstName}
                            readOnly={true}
                        />
                    </div>
                    <div className={styles["display-error"]}>
                        <input
                            type="text"
                            name="lastName"
                            id="last-name"
                            value={props.profile.lastName}
                            readOnly={true}

                        />
                    </div>
                </div>
                <div className={styles["input-form"]}>
                    <div className={styles["display-error"]}>
                        <input
                            type="text"
                            name="street"
                            id="street-details"
                            value={props.profile.street}
                            readOnly={true}
                        />
                    </div>
                    <div className={styles["display-error"]}>
                        <input
                            type="text"
                            name="city"
                            id="city-details"
                            value={props.profile.city}
                            readOnly={true}
                        />
                    </div>
                </div>

                <div className={styles["input-form"]}>
                    <div className={styles["display-error"]}>
                        <input
                            type="text"
                            name="age"
                            id="age-details"
                            value={props.profile.age}
                            readOnly={true}
                        />
                    </div>
                    <div className={styles["display-error"]}>
                        <input
                            type="text"
                            name="phone"
                            id="phone-details"
                            value={props.profile.phone}
                            readOnly={true}
                        />
                    </div>
                </div>
                <div className={styles["input-form"]}>
                    <div className={styles["display-error"]}>
                        <input
                            type="email"
                            name="email"
                            id="email-details"
                            value={props.profile.email}
                            readOnly={true}
                        />
                    </div>
                    <div className={styles["display-error"]}>
                        <input
                            type="text"
                            name="username"
                            id="user-details"
                            value={props.profile.username}
                            readOnly={true}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile;