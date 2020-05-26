import React, { SyntheticEvent } from 'react';
import {postComposition} from '../firebase/functions.js';
import { nullProps, IEditCompositionStateType } from "../types/types";

class CreateComposition extends React.Component<nullProps, IEditCompositionStateType> {
    constructor(props: nullProps) {
        super(props);

        this.state = {
            name: "",
            imageURL: "",
            description: "",
            notification: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNotification = this.handleNotification.bind(this);
    }

    handleChange(event: SyntheticEvent) {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement;

        this.setState({
            [target.id]: target.value
        });
    }

    handleSubmit(event: SyntheticEvent) {
        console.log("Submitted!", this.state);
        event.preventDefault();
        postComposition(this.state);
        this.handleNotification();
    }

    handleNotification() {
        if (this.state.notification === "notified") return;

        this.setState({
            notification: "notified"
        })
        window.setTimeout(() => {
            this.setState({
                notification: ""
            })
        }, 2000);
    }

    render() {
        let visibleClass = this.state.notification ? "create-composition__visible" : "create-composition__invisible"

        return(
            <section className="create-composition">
                <h1 className="create-composition__header header-primary">Upload a Composition</h1>

                <div className="create-composition__form-container">
                    <form className="create-composition__form">
                        <label htmlFor="name" className="create-composition__label">Name</label>
                        <input type="text" className="create-composition__input" placeholder="Name" id="name" onChange={this.handleChange} />

                        <label htmlFor="imageURL" className="create-composition__label">Image-URL</label>
                        <input type="text" className="create-composition__input" placeholder="https://www.example.com/example.png" id="imageURL" onChange={this.handleChange} />

                        <label htmlFor="description" className="create-composition__label">Description</label>
                        <input type="text" className="create-composition__input" placeholder="Enter in a description" id="description" onChange={this.handleChange} />
                    </form>
                    <button className="create-composition__button button" onClick={this.handleSubmit} >
                        Submit
                    </button>
                </div>

                <div className={`create-composition__message-success ${visibleClass}`} id="create-composition__message-success">
                    <h2 className="create-composition__message">Composition added!</h2>
                </div>

            </section>
        )
    }
}

export default CreateComposition;