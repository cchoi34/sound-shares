import React from "react";
import { getCompositions, deleteComposition, getSingleComposition } from '../firebase/functions.js';

class Compositions extends React.Component {
    constructor() {
        super();
        this.state = {
            compositions: [],
            singleComposition: {}
        };
    }

    componentDidMount() {
        getCompositions(this);
    }

    render() {
        const allComps = this.state.compositions.length ? this.state.compositions : null;

        return (
            <section className="compositions">
                {
                    allComps ? 
                        <ul className="compositions__list">
                        {this.state.compositions.map((composition) => {
                            return (
                                <li className="compositions__item" key={composition.id}>
                                    <img className="compositions__image" src={composition.imageURL} />
                                    <p className="compositions__title">{composition.name}</p>

                                    <button className="compositions__button-delete" onClick={() => {
                                        deleteComposition(composition.id);
                                    }}>X</button>
                                </li>
                            )
                        })}
                        </ul>
                        :
                        <h1 className="empty-data">No compositions found!</h1>
                }
            </section>

        )
    }
}

export default Compositions;