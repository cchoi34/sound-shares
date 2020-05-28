import React, { SyntheticEvent } from 'react';
import DeleteWarning from './DeleteWarning';
import { getSingleComposition, updateComposition, deleteComposition } from '../firebase/functions';
import { Link, Redirect } from "react-router-dom";
import { IMatchProps, IEditCompositionStateType } from "../types/types";

class UpdateComposition extends React.Component<IMatchProps, IEditCompositionStateType> {
    constructor(props: IMatchProps) {
        super(props);
        this.state = {
            name: "Single Composition",
            imageURL: "https://i.pinimg.com/originals/5b/50/78/5b50786d19dc8d7d36603fce2894a123.jpg",
            description: "Enter a description...",
            deletePopup: "invisible",
            redirect: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteWarning = this.handleDeleteWarning.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        getSingleComposition(this, id);
    }

    handleChange(event: SyntheticEvent) {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement;
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit(id: string) {
        updateComposition(id, this.state);
    }

    handleDeleteWarning() {
        if (this.state.deletePopup !== "visible") {
            this.setState({
                deletePopup: "visible",
            });
        } else {
            this.setState({
                deletePopup: "invisible",
            })
        }
    }

    handleDelete(id: string) {
        this.setState({
            redirect: "home",
        })
        deleteComposition(id);
    }

    render() {
        if (this.state.redirect !== "") {
            return <Redirect to={`/${this.state.redirect}`} />
        }

        const id = this.props.match.params.id;

        return(
            <section className="update-composition">
                {
                    this.state.deletePopup === "visible" && <DeleteWarning togglePopup={this.handleDeleteWarning} handleDelete={this.handleDelete} id={id} /> 
                }
                <div className="update-composition__container">
                    <form className="update-composition__form">
                        <input className="update-composition__input update-composition__title" 
                               type="text" 
                               name="name" 
                               value={this.state.name} 
                               onChange={this.handleChange} />

                        <img src={this.state.imageURL} className="update-composition__image "/>
                        <input className="update-composition__input update-composition__imageURL" 
                               type="text" 
                               name="imageURL" 
                               value={this.state.imageURL} 
                               onChange={this.handleChange} />

                        <textarea className="update-composition__input update-composition__description" 
                                  name="description" 
                                  value={this.state.description} 
                                  onChange={this.handleChange} />
                    </form>
                    
                    {/* <p className="update-composition__audio">Audio</p>
                    <p className="update-composition__video">Video</p> */}

                    <div className="update-composition__button-container" >
                        <button 
                            className="update-composition__button-delete update-composition__button" 
                            onClick={() => {
                                            this.handleDeleteWarning();
                                        }}>
                            Delete Composition           
                        </button>

                        <Link to={`/single-composition/${id}`} className="update-composition__link">
                            <button className="update-composition__button" onClick={() => {
                                this.handleSubmit(id);
                            }} >Save Changes</button>
                        </Link>

                    </div>
                </div>
            </section>
        )
    }
}

export default UpdateComposition;