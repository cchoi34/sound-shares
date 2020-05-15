import React from 'react';
import { getSingleComposition } from '../firebase/functions.js';

class SingleComposition extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Single Composition",
            imageURL: "https://i.pinimg.com/originals/5b/50/78/5b50786d19dc8d7d36603fce2894a123.jpg",
            description: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        getSingleComposition(this, id);
    }

    render() {
        return(
            <section className="single-composition">
                <div className="single-composition__container">
                    <h2 className="single-composition__title">{this.state.title}</h2>
                    <img src={this.state.imageURL} className="single-composition__image "/>

                    <p className="single-composition__description">{this.state.description}</p>
                    <p className="single-composition__audio">Audio</p>
                    <p className="single-composition__video">Video</p>
                </div>
            </section>
        )
    }
}

export default SingleComposition;