import React from "react";

class NavbarMenu extends React.Component {
    render() {
        return (
            <section className="navbar-menu">
                <input type="checkbox" className="navbar-menu__checkbox" id="navbar-toggle" />

                <label htmlFor="navbar-toggle" className="navbar-menu__button">
                    <span className="navbar-menu__icon">&nbsp;</span>    
                </label>    

                <div className="navbar-menu__container">
                    <ul className="navbar-menu__list">
                        <li className="navbar-menu__item">
                            <a href="#" className="navbar-menu__link">My Compositions</a>
                        </li>

                        <li className="navbar-menu__item">
                            <a href="#" className="navbar-menu__link">Audios</a>
                        </li>

                        <li className="navbar-menu__item">
                            <a href="#" className="navbar-menu__link">Videos</a>
                        </li>

                        <li className="navbar-menu__item">
                            <a href="#" className="navbar-menu__link">Upload</a>
                        </li>             
                    </ul>
                </div>
            </section>
        )
    }
}

export default NavbarMenu;