import React from "react";
import PictureHeader from "../../components/PictureHeader/PictureHeader";
import Request from "../../components/Vraag/Request";
import "./VraagPage.css";

const VraagPage = () => {
    return (
        <>
            <PictureHeader />
            <div className="request-wrapper">
                <section className='request-component'>
                    <Request />
                </section>
                <section className='request-component'>
                    <Request />
                </section>
            </div>
            <div className="request-wrapper">
                <section className='request-component'>
                    <Request />
                </section>
                <section className='request-component'>
                    <Request />
                </section>
            </div>
        </>
    )
}
export default VraagPage;