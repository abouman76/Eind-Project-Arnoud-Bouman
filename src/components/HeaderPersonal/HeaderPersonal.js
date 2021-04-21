import React from "react";
import "../HeaderGeneral/Header.css"
import searchIcon from "../../assets/searchIcon.svg";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../helper/LoginContext";
import {useHistory} from "react-router-dom"


const HeaderPersonal = () => {
    const {isAuthenticated, setIsAuthenticated} = useAuth();

    const history = useHistory();

    const handleLogout = () => {
        // console.log("uitloggen svp");
        setIsAuthenticated(false);
        history.push("/");
    }

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
                        {isAuthenticated === false &&
                        <li>
                            <NavLink to="/registreren" activeClassName="current-page">registreren</NavLink>
                        </li>
                        }
                        {isAuthenticated === true &&
                        <li>
                            <NavLink to="/plaats" activeClassName="current-page">plaats advertentie</NavLink>
                        </li>
                        }
                        {isAuthenticated === true &&
                        <li>
                            <NavLink to="/profiel" activeClassName="current-page">profiel</NavLink>
                        </li>
                        }
                        {isAuthenticated === false &&
                        <li>
                            <NavLink to="/inloggen" activeClassName="current-page">inloggen</NavLink>
                        </li>
                        }
                        {isAuthenticated === true &&
                            <button onClick={handleLogout}>uitloggen</button>
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

export default HeaderPersonal;