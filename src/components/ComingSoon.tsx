import React from "react";
import { Link } from "react-router-dom";

const ComingSoon: React.FC = () => {
    return (
        <section className="coming-soon">
            <h1 className="coming-soon__header">
                ...So this isn't finished yet
            </h1>
            <img className="coming-soon__image" src="https://static.wixstatic.com/media/155986_7cebb3ddac364f63a532e2c7d9b5f48e~mv2.gif" />

            <Link className="coming-soon__link" to="/home">
                <h2 className="coming-soon__back">
                    Go back to main page
                </h2>
            </Link>
        </section>
    )
}

export default ComingSoon;