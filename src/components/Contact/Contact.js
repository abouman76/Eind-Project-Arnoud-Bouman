import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Contact.css";
import Button_send_contact from "../Buttons/Button_send_contact";

const Contact = () => {
    return(
        <>
            <div className="contact-container">
                <form className="form-container">
                    <div className="name-phone">
                        <label htmlFor="name-details">
                            <input
                                type="text"
                                name="name"
                                id="name-details"
                                placeholder="Uw voor- en achternaam"
                                // ref={register}
                            />
                        </label>

                        <label htmlFor="phone-details">
                            <input
                                type="text"
                                name="phone"
                                id="phone-details"
                                placeholder="Uw telefoonnummer"
                                // ref={register}
                            />
                        </label>
                    </div>
                    <div className="address-email">
                        <label htmlFor="address-details">
                            <input
                                type="text"
                                name="address"
                                id="address-details"
                                placeholder="Straat + huisnr, postcode en Plaats"
                                // ref={register}
                            />
                        </label>

                        <label htmlFor="mail-details">
                            <input
                                type="text"
                                name="mail"
                                id="mail-details"
                                placeholder="Uw emailadres"
                                // ref={register}
                            />
                        </label>
                    </div>
                        <label htmlFor="text-details">
                            <textarea
                            name = "text"
                            id="text-details"
                            rows="6"
                            cols="50"
                            placeholder="Plaats uw vraag of opmerking hier"
                            // ref={register}
                            >
                            </textarea>
                        </label>

                    <Button_send_contact />

                </form>


            </div>
        </>

        )

};

export default Contact;