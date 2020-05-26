import React, { SyntheticEvent } from 'react';
import { getSingleComposition, updateComposition } from '../firebase/functions.js';
import { Link } from "react-router-dom";
import { IMatchProps, IEditCompositionStateType } from "../types/types";

class UpdateComposition extends React.Component<IMatchProps, IEditCompositionStateType> {
    constructor(props: IMatchProps) {
        super(props);
        this.state = {
            name: "Single Composition",
            imageURL: "https://i.pinimg.com/originals/5b/50/78/5b50786d19dc8d7d36603fce2894a123.jpg",
            description: "Enter a description...",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handlePreview = this.handlePreview.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        getSingleComposition(this, id);
    }

    handleChange(event: SyntheticEvent) {
        console.log("state is changing: ", this.state);
        const target = event.target as HTMLInputElement | HTMLTextAreaElement;
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit(id: string) {
        updateComposition(id, this.state);
    }

    // handlePreview(event) {

    // }

    render() {
        const id = this.props.match.params.id;

        return(
            <section className="update-composition">
                <div className="update-composition__container">
                    <form className="update-composition__form">
                        <input className="update-composition__input update-composition__title" 
                               type="text" 
                               name="name" 
                               placeholder={this.state.name} 
                               onChange={this.handleChange} />

                        <img src={this.state.imageURL} className="update-composition__image "/>
                        <input className="update-composition__input update-composition__imageURL" 
                               type="text" 
                               name="imageURL" 
                               placeholder={this.state.imageURL} 
                               onChange={this.handleChange} />

                        <textarea className="update-composition__input update-composition__description" 
                                  name="description" 
                                  placeholder={this.state.description} 
                                  onChange={this.handleChange} />
                    </form>
                    
                    <p className="update-composition__audio">Audio</p>
                    <p className="update-composition__video">Video</p>

                    <Link to={`/single-composition/${id}`} className="update-composition__link">
                        <button className="update-composition__button" onClick={() => {
                            this.handleSubmit(id);
                        }} >Save Changes</button>
                    </Link>
                </div>
            </section>
        )
    }
}

export default UpdateComposition;