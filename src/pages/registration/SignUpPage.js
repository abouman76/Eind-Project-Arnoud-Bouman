import React, {useEffect, useState} from "react";
import Register from "../../components/Register/Register";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {

    // const [loading, setLoading] = useState(true);
    //
    // useEffect(() => {
    //     setTimeout(() => setLoading(false), 2000)
    // }, [])

    return (
        <>
            <div className={styles["sign-up-wrapper"]}>
                <main className={styles["main-sign-up-page"]}>
                    <h1>Registratie</h1>
                    <p>Registreer u hier voor "Sociaal Oosterhout"</p>
                </main>
                {/*{loading === false ? (*/}
                <div className={styles["sign-up-comp"]}>
                    <Register />
                </div>
                {/*) : (<div className={styles.loader}><h3>Loading.....</h3></div>)}*/}
            </div>
        </>

    )
};

export default SignUpPage;