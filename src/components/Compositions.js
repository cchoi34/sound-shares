import React from "react";
import * as firebase from 'firebase';

class Compositions extends React.Component {
    constructor() {
        super();
        this.state = {
            compositions: []
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        const compositionRef = rootRef.child('compositions');
        compositionRef.on('value', snap => {
            this.setState({
                compositions: snap.val()
            })
        })
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