import React from "react";
import Contact from "../../components/Contact/Contact";
import "./ContactPage.css"
import PictureHeader from "../../components/PictureHeader/PictureHeader";

const ContactPage = () => {
    return (
        <>
            <PictureHeader />
            <div className="contact-wrapper">
                <main className="main-contactPage">
                    <h1>Neem contact op!</h1>
                    <p>Wilt u vrijwilliger worden, of heeft u gewoon een vraag?</p>
                    <p>Neemt u dan gerust contact met ons op via onderstaand contactformulier.</p>
                </main>
                <div className="contact-page">
                    <Contact />
                </div>
            </div>

        </>


    )
}
export default ContactPage;