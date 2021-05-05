import React, {useEffect, useState} from "react";
import OfferComp from "../../components/Aanbod/OfferComp";
import styles from "./OfferPage.module.css";
import app from "../../modules/Firebase";

const OfferPage = () => {

    const [offers, setOffers] = useState([]);
    const [users, setUsers] = useState({});

    useEffect(() => {
        async function fetchData() {

            try {
                const userInformationOffer = await app.firestore().collection("userInformation-new").get()

                let userData = {

                }

                userInformationOffer.docs.forEach(doc => {
                    userData[doc.id] = doc.data()
                });

                setUsers(userData);

                const advertisements = await app.firestore().collection("userAdvertisement").get()
                setOffers(advertisements.docs.map(doc => doc.data()));

            } catch (error) {
                console.error(error);
            }
        }

        fetchData();

    }, []);

    return (
        <>
            <div className={styles["offer-page-wrapper"]}>
                <main className={styles["header-offer-page"]}>
                    <h2>Welkom op de aanbod pagina van Sociaal Oosterhout</h2>
                    <p>Hier ziet u alle advertenties van buurtgenoten die iets aan te bieden hebben</p>

                </main>
                <div className={styles["offer-wrapper"]}>
                    {offers.filter(offer => offer.choice === "Aanbod").sort((a,  b) => {
                        if(b.date < a.date) {
                            return -1;
                        } else if (b.date > a.date) {
                            return 1;
                        } else {
                            return 0;
                        }
                    })
                        .map((offer) => {
                                return <section className={styles['offer-component']} key={offer.title}>
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
            </div>

        </>
    )
}

export default OfferPage;