import React from "react";
import Contact from "../../components/Contact/Contact";
import "./ContactPage.css"

const ContactPage = () => {
    return (
        <>
            <main className="main-contactPage">
                <h1>Neem contact op!</h1>
                <p>Wilt u vrijwilliger worden, of heeft u gewoon een vraag, neemt u dan gerust contact met ons op via onderstaand contactformulier. </p>
            </main>
            <div>
                <Contact />
            </div>
        </>


    )
}
export default ContactPage;