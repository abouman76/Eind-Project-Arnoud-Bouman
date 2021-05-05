import React from "react";
import Contact from "../../components/Contact/Contact";
import styles from "./ContactPage.module.css"

const ContactPage = () => {
    return (
        <>
            <div className={styles["contact-wrapper"]}>
                <main className={styles["main-contact-page"]}>
                    <h1>Neem contact op!</h1>
                    <p>Wilt u vrijwilliger worden, of heeft u gewoon een vraag?</p>
                    <p>Neemt u dan gerust contact met ons op via onderstaand contactformulier.</p>
                </main>
                <div className={styles["contact-page"]}>
                    <Contact />
                </div>
            </div>
        </>
    )
}
export default ContactPage;