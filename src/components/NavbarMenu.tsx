import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

class NavbarMenu extends React.Component {
    render() {
        return (
            <section className="navbar-menu">
                {/* <input type="checkbox" className="navbar-menu__checkbox" id="navbar-toggle" />

                <label htmlFor="navbar-toggle" className="navbar-menu__button">
                    <span className="navbar-menu__icon">&nbsp;</span>    
                </label>     */}

                <div className="navbar-menu__container">
                    <ul className="navbar-menu__list">
                        <li className="navbar-menu__item">
                            <Link to="/home" className="navbar-menu__link">My Compositions</Link>
                        </li>

                        <li className="navbar-menu__item">
                            <Link to="/audio" className="navbar-menu__link">Audios</Link>
                        </li>

                        <li className="navbar-menu__item">
                            <Link to="/video" className="navbar-menu__link">Videos</Link>
                        </li>

                        <li className="navbar-menu__item">
                            <Link to="/upload" className="navbar-menu__link">Upload</Link>
                        </li>

                        <li className="navbar-menu__item">
                            <Link to="/signin" className="navbar-menu__link">Sign In</Link>
                        </li>               
                    </ul>
                </div>
            </section>
        )
    }
}

export default NavbarMenu;