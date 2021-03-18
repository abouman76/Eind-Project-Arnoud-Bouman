import React from "react";
import "./Header.css";
import searchIcon from "../../assets/searchIcon.svg";

const Header = () => {
    return (
        <>
        <header className="main-header">
            <nav className="header-nav">
                <ul className="header-list">
                    <li className="current-page"><a href="/">home</a></li>
                    <li><a href="/">aanbod</a></li>
                    <li><a href="/">vraag</a></li>
                    <li><a href="/">contact</a></li>
                    <li><a href="/">inloggen</a></li>
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

export default Header