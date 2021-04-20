import React from "react";
import { useForm} from "react-hook-form";
import "./MyAdComponent.css";

// Firebase CONFIG
import app from "../../modules/Firebase";
const db = app.firestore();

const MyAdComponent = () => {
    const {handleSubmit, register, formState: {errors}, reset} = useForm();

    // const toDate = (dateString) => {
    //     const [day, month, year] = dateString.split("-");
    //     return new Date(day, month -1, year);
    // }

    const onSubmitAd = async (data) => {
        console.log("DATA", data);
        reset();

        await db.collection("userAdvertisement").add({
            choice: data.choice,
            // date: data.date,
            date: new Date(),
            // date: data.firestore.FieldValue.serverTimestamp(),
            // date: app.database.ServerValue.TIMESTAMP,
            title: data.title,
            description: data.description
        });
    }

    return (
        <div className="main-adComponent">
            <div className="adComponent">
                <div className="adComp-header">
                    <h2>Uw advertentie</h2>
                </div>
            <form className="adComponent-form" onSubmit={handleSubmit(onSubmitAd)}>
                <div className="radio-buttons">
                    <label className="radio-btn" htmlFor="offer-ad">
                        <input className="input-radio-btn"
                               type="radio"
                               name="choice"
                               value="Aanbod"
                               {...register(
                                   "choice", {
                                       required: {
                                           value: "Aanbod"
                                       }
                                   }
                               )}

                        />
                        Ik heb iets aan te bieden
                    </label>
                    <label className="radio-btn" htmlFor="request-ad">
                        <input className="input-radio-btn"
                               type="radio"
                               name="choice"
                               value="Vraag"
                               {...register(
                                   "choice", {
                                       required: {
                                           value: "Vraag"
                                       }
                                   }
                               )}

                        />
                        Ik heb een vraag
                    </label>
                    <label className="input-date-ad">
                        Datum plaatsing:
                        <input type="text"
                               name="date"
                               id="input-date-ad"
                               placeholder="datum:"
                               {...register(
                                   "date", {
                                       required: {
                                           value: true,
                                           message: "Voer datum in"
                                       }
                                   }
                               )}
                        />
                    </label>
                    {errors.date && <p className="errors-ad-comp">{errors.date.message}</p>}

                    <label className="title" htmlFor="title-details">
                        Vul een titel in
                        <input className="adComp-title"
                               type="text"
                               name="title"
                               id="title-details"
                               placeholder="Geef een titel"
                               {...register(
                                   "title", {
                                       required: {
                                           value: true,
                                           message: "Maak een advertentie titel"
                                       }
                                   }
                               )}
                        />
                    </label>
                    {errors.title && <p className="errors-ad-comp">{errors.title.message}</p>}

                    <label className="description" htmlFor="description-details">
                        Omschrijf uw advertentie
                        <textarea className="adComp-description"
                               name="description"
                               id="description-details"
                                  rows="10"
                                  cols="40"
                               placeholder="omschrijving"
                               {...register(
                                   "description", {
                                       required: {
                                           value: true,
                                           message: "Verplicht veld"
                                       }
                                   }
                               )}
                            >
                        </textarea>
                    </label>
                    {errors.description && <p className="errors-ad-comp">{errors.description.message}</p>}
                </div>
                <button className="adComp-btn" type="submit">plaats</button>
            </form>
            </div>
        </div>
    )
}

export default MyAdComponent;