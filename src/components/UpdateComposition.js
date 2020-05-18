import React from 'react';
import { getSingleComposition } from '../firebase/functions.js';

class UpdateComposition extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Single Composition",
            imageURL: "https://i.pinimg.com/originals/5b/50/78/5b50786d19dc8d7d36603fce2894a123.jpg",
            description: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
        }
    }

    componentDidMount() {
        
    }

    handleChange(event) {

    }

    handleSubmit(event) {

    }

    handlePreview(event) {
        
    }

    render() {
        return(
            <section className="update-composition">
                <div className="update-composition__container">
                    <form className="update-composition-form">
                        <input className="update-composition-input update-composition-title" type="text" placeholder={this.state.title} />

                        <img src={this.state.imageURL} className="update-composition__image "/>
                        <input className="update-composition-input update-composition-imageURL" type="text" placeholder={this.state.imageURL} />

                        <input className="update-composition-input update-composition-description" type="text" placeholder={this.state.description} />
                    </form>
                    
                    <p className="update-composition__audio">Audio</p>
                    <p className="update-composition__video">Video</p>
                </div>
            </section>
        )
    }
}

export default UpdateComposition;