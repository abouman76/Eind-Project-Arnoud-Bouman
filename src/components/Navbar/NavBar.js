import React from "react";
import styles from "./NavBar.module.css";
import searchIcon from "../../assets/searchIcon.svg";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../helper/LoginContext";
import {useHistory} from "react-router-dom";
import Hamburger from "../HamburgerMenu/Hamburger";

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
            <header className={styles["main-nav"]}>
                <nav className={styles["header-nav"]}>
                    <ul className={styles["nav-list"]}>
                        <li>
                            <NavLink to="/" exact activeClassName={styles["current-page"]}>home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aanbod" activeClassName={styles["current-page"]}>aanbod</NavLink>
                        </li>

                        <li>
                            <NavLink to="/vraag" activeClassName={styles["current-page"]}>vraag</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName={styles["current-page"]}>contact</NavLink>
                        </li>
                        {!authUser  &&
                        <li>
                            <NavLink to="/registreren" activeClassName={styles["current-page"]}>registreren</NavLink>
                        </li>
                        }
                        {authUser &&
                        <li>
                            <NavLink to="/plaats" activeClassName={styles["current-page"]}>plaats advertentie</NavLink>
                        </li>
                        }
                        {authUser &&
                        <li>
                            <NavLink to="/profiel" activeClassName={styles["current-page"]}>profiel</NavLink>
                        </li>
                        }
                        {!authUser  &&
                        <li>
                            <NavLink to="/inloggen" activeClassName={styles["current-page"]}>inloggen</NavLink>
                        </li>
                        }
                        {authUser &&
                            <button className={styles["btn-out"]} onClick={handleLogout}>uitloggen</button>
                        }
                    </ul>
                        <Hamburger />
                </nav>
                <div className={styles["search"]}>
                    <img className={styles["search-icon"]} src={searchIcon} alt="Zoek icon" />
                    <input className={styles["input-search"]} type="text" placeholder="zoek" />
                </div>
            </header>

        </>
    )
}

export default NavBar;