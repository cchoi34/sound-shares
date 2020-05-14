import React from 'react';
import {postComposition} from '../firebase/functions.js';

class SingleComposition extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <section className="single-composition">
                <div className="single-composition__container">
                    <h2 className="single-composition__header-primary">Single Composition</h2>
                </div>
            </section>
        )
    }
}

export default SingleComposition;