import React from "react";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./Register.css";

// Firebase Config:
import app from "../../modules/Firebase";
const db = app.firestore();

const Register = () => {

    const { register, handleSubmit, formState: {errors}, watch } = useForm();

    const history = useHistory();

    // const passWords = watch(["password", "checkPassword"]);
    // console.log("Wachtwoord", passWords.password === passWords.checkPassWord);

    const onFormSubmit= async (data) => {
        console.log("DATA:" , data, data.email, data.password);

        const response = await app.auth().createUserWithEmailAndPassword(data.email, data.password);
        console.log("Sign-UP Response", response.user.uid);

        const userCollection = await db.collection("userInformation").doc(response.user.uid).set({
            age: data.age,
            city: data.city,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            street: data.street,
            username: data.username
        });
        history.push("/inloggen")
        // console.log("USER", userCollection);
    }

    // const validatePassWordMatch = (value) => {
    //     if(passWords.password === value) {
    //         return true
    //     } else {
    //         return "Voer hetzelfde wachtwoord in."
    //     }
    // }

    const validateEmail = (value) => {
        if(value.includes("@")) {
            return true
        } else {
            return `Uw email dient een "@" te bevatten.`
        }
    }

    const validateZipCode = (value) => {
        // console.log("VALUE", value)
        if(value.includes("6515")) {
            return true
        } else{
            return "Uw woont niet in de juiste postcode";
        }
    }

    return(
        <div className="main-register">
            <form className="register-form" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="input-form">
                    <div className="display-error">
                        <input
                            type="text"
                            name="firstName"
                            id="first-name"
                            placeholder="uw voornaam"
                            {...register(
                                "firstName",{
                                    required: {
                                        value: true,
                                        message: "Verplicht veld."
                                    },
                                }
                            )}
                        />
                        <p>{errors.firstName?.message}</p>
                        {/*{errors.firstName && <p>{errors.firstName.message}</p>}*/}
                    </div>
                    <div className="display-error">
                        <input
                            type="text"
                            name="lastName"
                            id="last-name"
                            placeholder="uw achternaam"
                            {...register(
                                "lastName",{
                                    required: {
                                        value: true,
                                        message: "Verplicht veld."
                                    },
                                }
                            )}
                        />
                        <p>{errors.lastName?.message}</p>
                    </div>
                </div>
                <div className="input-form">
                    <div className="display-error">
                        <input
                            type="text"
                            name="street"
                            id="street-details"
                            placeholder="uw straat + huisnummer"
                            {...register(
                                "street",{
                                    required: {
                                        value: true,
                                        message: "Verplicht veld."
                                    },
                                }
                            )}
                        />
                        {errors.street && <p>{errors.street.message}</p>}
                    </div>
                    <div className="display-error">
                        <input
                            type="text"
                            name="city"
                            id="city-details"
                            placeholder="uw postcode + woonplaats"
                            {...register(
                                "city", {
                                    required: "Voer uw postcode en woonplaats in.",
                                    validate: validateZipCode,
                                }
                            )}
                        />
                        {errors.city && <p>{errors.city.message}</p>}
                    </div>
                </div>

                <div className="input-form">
                    <div className="display-error">
                        <input
                            type="text"
                            name="age"
                            id="age-details"
                            placeholder="uw leeftijd"
                            {...register(
                                "age",{
                                    required: {
                                        value: true,
                                        message: "Verplicht veld.",
                                    },
                                    min: {
                                        value: 16,
                                        message: "U dient minimaal 16 jaar oud te zijn.",
                                    },
                                }
                            )}
                        />
                        {errors.age && <p>{errors.age.message}</p>}
                    </div>
                    <div className="display-error">
                        <input
                            type="text"
                            name="phone"
                            id="phone-details"
                            placeholder="uw telefoonnummer"
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
                <div className="input-form">
                    <div className="display-error">
                        <input
                            type="email"
                            name="email"
                            id="email-details"
                            placeholder="uw e-mailadres"
                            {...register(
                                "email",{
                                    required: "Voer uw e-mailadres in.",
                                    validate: validateEmail,
                                }
                            )}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="display-error">
                        <input
                            type="text"
                            name="username"
                            id="user-details"
                            placeholder="uw gebruikersnaam"
                            {...register(
                                "username", {
                                    required: {
                                        value: true,
                                        message: "Verplicht veld."
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Dient uit minimaal 6 karakters te bestaan"
                                    },
                                    pattern: {
                                        value: /^(?=.?[A-Z])(?=.?[a-z]).{6,}$/,
                                        message: "Dient minimaal 1 hoofdletter te bevatten"
                                    }
                                }
                            )}
                        />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>

                </div>
                <div className="input-form">
                    <div className="display-error">
                        <input
                            type="password"
                            name="password"
                            id="psw-details"
                            placeholder="uw wachtwoord"
                            {...register(
                                "password",{
                                    required: {
                                        value: true,
                                        message: "Verplicht veld"
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Dient uit minimaal 8 karakters te bestaan"
                                    },
                                    pattern: {
                                        value: /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,}$/,
                                        message: "Minimaal 1 hoofdletter, kleine letter en cijfer"
                                    },
                                }
                            )}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <div className="display-error">
                        {/*<input*/}
                        {/*    type="password"*/}
                        {/*    name="checkPassword"*/}
                        {/*    id="check-psw-details"*/}
                        {/*    placeholder="herhaal wachtwoord"*/}
                        {/*    {...register(*/}
                        {/*        "checkPassword",{*/}
                        {/*            required: "Herhaal wachtwoord",*/}
                        {/*            validate: validatePassWordMatch*/}
                        {/*        }*/}
                        {/*    )}*/}
                        {/*/>*/}
                        {/*{errors.checkPassword && <p>{errors.checkPassword.message}</p>}*/}
                    </div>
                </div>
                <button className="btn-register"
                        type="submit"
                >registreer
                </button>
            </form>
        </div>

    )
}

export default Register;