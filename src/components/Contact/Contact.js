import React from "react";
import {useForm} from "react-hook-form";
import "./Contact.css";
import BtnSendContact from "../Buttons/BtnSendContact";

const Contact = () => {
    const {handleSubmit, register, errors} = useForm();

    const onFormSubmit = (data) => {
        console.log(data);

    }

    const validateZipCode = (value) => {
        // console.log("VALUE", value)
        if(value.includes("6515")) {
            return true
        } else{
            return "Uw woont niet in de juiste postcode";
        }

        }

    const validateEmail = (value) => {
        if(value.includes("@")) {
            return true
        } else {
            return 'uw emailadres dient een "@" te bevatten';
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
                            ref={register(
                                {
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
                            ref={register(
                                {
                                    required: {
                                        value: true,
                                        message: "Voer uw telefoonnummer in zonder - verbindingsteken."
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "dient uit 10 cijfers te bestaan"
                                    }
                                }
                            )
                            }
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
                            ref={register(
                                {
                                    required: "Voer uw straat, huisnummer, postcode en plaats in.",
                                    validate: validateZipCode,
                                }
                            )
                            }
                        />
                        {errors.address && <p>{errors.address.message}</p>}
                    </div>
                    <div className="input-with-error">
                        <input
                            type="text"
                            name="mail"
                            id="mail-details"
                            placeholder="Uw email adres"
                            ref={register(
                                {
                                    required: "Voer uw email adres in",
                                    validate: validateEmail
                                }
                            )
                            }
                        />
                        {errors.mail && <p>{errors.mail.message}</p>}
                    </div>
                </div>
                <div className="input-with-error">
                <textarea
                    name="text"
                    id="text-details"
                    rows="10"
                    cols="50"
                    placeholder="Uw bericht"
                    ref={register(
                        {
                            required: {
                                value: true,
                                message: "Verplicht veld"
                            }
                        }
                        )
                    }
                >
                </textarea>
                {errors.text && <p>{errors.text.message}</p>}
                </div>
                <div className="btn-send-contactform">
                    <BtnSendContact/>
                </div>
            </form>
        </>

    )
};

export default Contact;