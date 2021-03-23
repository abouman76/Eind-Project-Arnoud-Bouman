import React from "react";
import "./Header.css";
import searchIcon from "../../assets/searchIcon.svg";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
        <header className="main-header">
            <nav className="header-nav">
                <ul className="header-list">
                    <li>
                        <NavLink to="/" exact activeClassName="current-page">home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aanbod" activeClassName="current-page">aanbod</NavLink>
                    </li>
                    <li>
                        <NavLink to="/vraag" activeClassName="current-page">vraag</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="current-page">contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/inloggen" activeClassName="current-page">inloggen</NavLink>
                    </li>
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