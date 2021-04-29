import React from "react";
import "./NavBar.css";
import searchIcon from "../../assets/searchIcon.svg";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../helper/LoginContext";
import {useHistory} from "react-router-dom";

const NavBar = () => {
    const {authUser, setAuthUser, logOut} = useAuth();

    const history = useHistory();

    const handleLogout = () => {
        // console.log("uitloggen svp");
        setAuthUser(null);
        logOut();
        history.push("/");
    }
    console.log("logOUT Auth", authUser);
    return (
        <>
            <header className="main-nav">
                <nav className="header-nav">
                    <ul className="nav-list">
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
                        {!authUser  &&
                        <li>
                            <NavLink to="/registreren" activeClassName="current-page">registreren</NavLink>
                        </li>
                        }
                        {authUser &&
                        <li>
                            <NavLink to="/plaats" activeClassName="current-page">plaats advertentie</NavLink>
                        </li>
                        }
                        {authUser &&
                        <li>
                            <NavLink to="/profiel" activeClassName="current-page">profiel</NavLink>
                        </li>
                        }
                        {!authUser  &&
                        <li>
                            <NavLink to="/inloggen" activeClassName="current-page">inloggen</NavLink>
                        </li>
                        }
                        {authUser &&
                            <button className="btn-out" onClick={handleLogout}>uitloggen</button>
                        }
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

export default NavBar;