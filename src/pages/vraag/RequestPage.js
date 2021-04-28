import React, {useEffect, useState} from "react";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import RequestComp from "../../components/Vraag/RequestComp";
import "./RequestPage.css";
import app from "../../modules/Firebase";

const RequestPage = () => {

    const [requests, setRequests] = useState([]);
    const [userRequests, setUserRequests] = useState({});

    useEffect(() => {

        async function fetchData() {

            const userInformationRequest = await app.firestore().collection("userInformation-new").get()
            let userData = {

            }

            userInformationRequest.docs.forEach(doc => {
                userData[doc.id] = doc.data();
            });

            setUserRequests(userData);

            const advertisements = await app.firestore().collection("userAdvertisement").get()
            setRequests(advertisements.docs.map(doc => doc.data()));
            // console.log("AD", advertisements.docs.map(doc => doc.data()));

        }
        fetchData();

    }, []);

    return (
        <>
            <PictureHeader />
            <main className="header-request-page">
                <h2>Welkom op de vraag pagina van Sociaal Oosterhout</h2>
                <p>Hier zit u alle advertenties van buurtgenoten met een vraag cq hulp verzoek</p>
            </main>
            <div className="request-wrapper">
                {requests.filter(request => request.choice === "Vraag").sort((a, b) => {
                    if(b.date < a.date) {
                        return -1;
                    } else if (b.date > a.date) {
                        return 1;
                    } else {
                        return 0;
                    }
                    })
                    .map((request) => {
                    return  <section className='request-component' key={request.title}>
                                <RequestComp
                                    title={request.title}
                                    date={request.date}
                                    description={request.description}
                                    name={`${userRequests[request.uid]?.firstName} ${userRequests[request.uid]?.lastName}`}
                                    phone={userRequests[request.uid]?.phone}
                                    email={userRequests[request.uid]?.email}
                                />
                            </section>
                    }
                )}
            </div>
        </>
    )
}
export default RequestPage;