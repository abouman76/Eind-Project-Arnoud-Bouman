import React from "react";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import OfferComp from "../../components/Aanbod/OfferComp";
import "./AanbodPage.css";

const AanbodPage = () => {
    return (
        <>
            <PictureHeader />
            <div className="offer-wrapper">
                <section className='offer-component'>
                    <OfferComp />
                </section>
                <section className='offer-component'>
                    <OfferComp />
                </section>
            </div>
            <div className="offer-wrapper">
                <section className='offer-component'>
                    <OfferComp />
                </section>
                <section className='offer-component'>
                    <OfferComp />
                </section>
            </div>
        </>
    )
}

export default AanbodPage;