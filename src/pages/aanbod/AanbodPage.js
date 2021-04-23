import React, {useEffect, useState} from "react";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import OfferComp from "../../components/Aanbod/OfferComp";
import "./AanbodPage.css";
import app from "../../modules/Firebase";

const AanbodPage = () => {

    const [offers, setOffers] = useState([]);
    const [users, setUsers] = useState({});

    useEffect(() => {
        async function fetchData() {

            const userInformationOffer = await app.firestore().collection("userInformation-new").get()

            let userData = {

            }

            userInformationOffer.docs.forEach(doc => {
                console.log("doc", doc.id);
                userData[doc.id] = doc.data()
            });

            setUsers(userData);
            console.log("UData", userData);

            const advertisements = await app.firestore().collection("userAdvertisement").get()
            console.log("ADS", advertisements.docs);
            setOffers(advertisements.docs.map(doc => doc.data()));
            console.log("AD", advertisements.docs.map(doc => doc.data()));
        }

        fetchData();

    }, []);

    console.log("OFFER ad", offers);

    return (
        <>
            <PictureHeader />
            <main className="header-offer-page">
                <h2>Welkom op de aanbod pagina van Sociaal Oosterhout</h2>
                <p>Hier ziet u alle advertenties van buurtgenoten die iets aan te bieden hebben</p>
            </main>
            <div className="offer-wrapper">
                {offers.filter(offer => offer.choice === "Aanbod").map((offer) => {
                    return <section className='offer-component' key={offer.uid}>
                                <OfferComp
                                    title={offer.title}
                                    date={offer.date}
                                    description={offer.description}
                                    name={`${users[offer.uid]?.firstName} ${users[offer.uid]?.lastName}`}
                                    phone={users[offer.uid]?.phone}
                                    email={users[offer.uid]?.email}
                                />
                            </section>
                        }
                )}
            </div>
        </>
    )
}

export default AanbodPage;