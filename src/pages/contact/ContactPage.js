import React from "react";
import Contact from "../../components/Contact/Contact";
import "./ContactPage.css"
import PictureHeader from "../../components/PictureHeader/PictureHeader";

const ContactPage = () => {
    return (
        <>
            <PictureHeader />
            <main className="main-contactPage">
                <h1>Neem contact op!</h1>
                <p>Wilt u vrijwilliger worden, of heeft u gewoon een vraag, neemt u dan gerust contact met ons op via onderstaand contactformulier. </p>
            </main>
            <div className="contact-page">
                <Contact />
            </div>
        </>


    )
}
export default ContactPage;