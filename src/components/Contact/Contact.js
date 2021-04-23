import React from "react";
import {useForm} from "react-hook-form";
import "./Contact.css";
import BtnSendContact from "../Buttons/BtnSendContact";

// Firebase CONFIG
import app from "../../modules/Firebase";
const db = app.firestore();

const Contact = () => {
    const {handleSubmit, register, formState: {errors}, reset} = useForm();

    const onFormSubmit = async (data) => {
        console.log(data);
        reset();

        const contactForm = await db.collection("contactForm").add({
            name: data.name,
            phone: data.phone,
            address: data.address,
            email: data.email,
            message: data.message
        });
        console.log("Contact", contactForm);
        // alert("message saved!");
    }

    const validateEmail = (value) => {
        if(value.includes("@")) {
            return true
        } else {
            return 'uw email adres dient een "@" te bevatten';
        }
    }
    // console.log("Errors", errors);

    return (
        <>
            <form className="form-container" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="name-phone">
                    <div className="input-with-error">
                        <input
                            type="text"
                            name="name"
                            id="name-details"
                            placeholder="Uw voor- en achternaam"

                            {...register(
                                "name", {
                                    required: {
                                        value: true,
                                        message: "Vul uw voor- en achternaam in"
                                    },
                                }
                            )
                            }
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>

                    <div className="input-with-error">
                        <input
                            type="text"
                            name="phone"
                            id="phone-details"
                            placeholder="Uw telefoonnummer"
                            {...register(
                                "phone",{
                                    required: {
                                        value: true,
                                        message: "Verplicht veld."
                                    },
                                    pattern: {
                                        value: /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/,
                                        message: "Voer een geldig telefoonnummer in.",
                                    },
                                }
                            )}
                        />
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </div>
                </div>

                <div className="address-email">
                    <div className="input-with-error">
                        <input
                            type="text"
                            name="address"
                            id="address-details"
                            placeholder="Straat + huisnummer, postcode en plaats"
                            {...register(
                                "address",{
                                    required: {
                                        value: true,
                                        message: "Verplicht veld"
                                    },
                                }
                            )
                            }
                        />
                        {errors.address && <p>{errors.address.message}</p>}
                    </div>
                    <div className="input-with-error">
                        <input
                            type="email"
                            name="email"
                            id="mail-details"
                            placeholder="Uw email adres"
                            {...register(
                                "email", {
                                    required: "Voer uw email adres in",
                                    validate: validateEmail
                                }
                            )
                            }
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                </div>
                <div className="input-with-error">
                <textarea className="text-contact"
                    name="message"
                    id="text-details"
                    rows="10"
                    cols="50"
                    placeholder="Uw bericht"
                    {...register(
                        "message",{
                            required: {
                                value: true,
                                message: "Verplicht veld"
                            }
                        }
                        )
                    }
                >
                </textarea>
                {errors.message && <p>{errors.message.message}</p>}
                </div>
                <div className="btn-send-contactform">
                    <BtnSendContact />
                </div>
            </form>
        </>

    )
};

export default Contact;