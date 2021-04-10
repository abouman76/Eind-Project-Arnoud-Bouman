import React from "react";
import "../HeaderGeneral/Header.css"
import searchIcon from "../../assets/searchIcon.svg";

const HeaderPersonal = () => {
    return (
        <>
            <header className="main-header">
                <nav className="header-nav">
                    <ul className="header-list">
                        <li><a href="/">Home</a></li>
                        <li className="current-page"><a href="/">Mijn advertentie</a></li>
                        <li><a href="/">Registratie</a></li>
                        <li><a href="/">Profiel</a></li>
                        <li><a href="/">Uitloggen</a></li>
                    </ul>
                </nav>

                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="Zoek icon" />
                    <input className="input-search" type="text" placeholder="zoek" />
                </div>
            </header>

        </>
    )
}

export default HeaderPersonal;