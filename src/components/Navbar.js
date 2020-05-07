import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <section className="navbar">
                <div className="navbar__container">
                    <a className="navbar__link">Home</a>
                    <a className="navbar__link">About Us</a>
                    <a className="navbar__link">Features</a>
                    <a className="navbar__link">Profile</a>
                    <a className="navbar__link">Trending</a>
                    <a className="navbar__link">Log in</a>
                </div>
            </section>
        )
    }
}

export default Navbar;