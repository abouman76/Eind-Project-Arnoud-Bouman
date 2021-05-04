import React from "react";
import {useForm} from "react-hook-form";
import styles from "./Contact.module.css";
import BtnSendContact from "../Buttons/BtnSendContact";

// Firebase CONFIG
import app from "../../modules/Firebase";
const db = app.firestore();

const Contact = () => {
    const {handleSubmit, register, formState: {errors}, reset} = useForm();

    const onFormSubmit = async (data) => {
        console.log(data);
        reset();
        try {
            const contactForm = await db.collection("contactForm").add({
                name: data.name,
                phone: data.phone,
                address: data.address,
                email: data.email,
                message: data.message
            });
            // console.log("Contact", contactForm);
        } catch (error) {
            console.error(errors)
        }
    }

    const validateEmail = (value) => {
        if(value.includes("@")) {
            return true
        } else {
            return 'uw email adres dient een "@" te bevatten';
        }
    }

    return (
        <>
            <form className={styles["form-container"]} onSubmit={handleSubmit(onFormSubmit)}>
                <div className={styles["name-phone"]}>
                    <div className={styles["input-with-error"]}>
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
                        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                    </div>

                    <div className={styles["input-with-error"]}>
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
                                        value: /^((\+|00(\s|\s?\s?)?)31(\s|\s?\\s?)?(\(0\)[\s]?)?|0)[1-9]((\s|\s?\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/,
                                        message: "Voer een geldig telefoonnummer in.",
                                    },
                                }
                            )}
                        />
                        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                    </div>
                </div>

                <div className={styles["address-email"]}>
                    <div className={styles["input-with-error"]}>
                        <input
                            type="text"
                            name="address"
                            id="address-details"
                            placeholder="uw volledige adres"
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
                        {errors.address && <p className={styles.error}>{errors.address.message}</p>}
                    </div>
                    <div className={styles["input-with-error"]}>
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
                        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    </div>
                </div>
                <div className={styles["input-with-error"]}>
                <textarea className={styles["text-contact"]}
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
                <div className={styles["btn-send-contact"]}>
                    <BtnSendContact />
                </div>
            </form>
        </>

    )
};

export default Contact;