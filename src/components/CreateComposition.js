import React from 'react';
import {postComposition} from '../firebase/functions.js';

class CreateComposition extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            imageURL: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log("Submitted!", this.state);
        event.preventDefault();
        postComposition(this.state);
    }

    render() {
        return(
            <section className="create-composition">
                <h1 className="create-composition__header header-primary">Upload a Composition</h1>

                <div className="create-composition__form-container">
                    <form className="create-composition__form">
                        <label htmlFor="name" className="create-composition__label">Name</label>
                        <input type="text" className="create-composition__input" placeholder="Name" id="name" onChange={this.handleChange} />

                        <label htmlFor="imageURL" className="create-composition__label">Image-URL</label>
                        <input type="text" className="create-composition__input" placeholder="https://www.example.com/example.png" id="imageURL" onChange={this.handleChange} />
                    </form>
                    <button className="create-composition__button button" onClick={this.handleSubmit} >
                        Submit
                    </button>
                </div>
            </section>
        )
    }
}

export default CreateComposition;