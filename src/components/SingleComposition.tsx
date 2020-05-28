import React from 'react';
import { getSingleComposition } from '../firebase/functions';
import { Link } from "react-router-dom";
import { IMatchProps, ICompositionStateType } from "../types/types";

class SingleComposition extends React.Component<IMatchProps, ICompositionStateType> {
    constructor(props: IMatchProps) {
        super(props);
        this.state = {
            name: "Single Composition",
            imageURL: "",
            description: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        getSingleComposition(this, id);
    }

    render() {
        const id = this.props.match.params.id;
        const imageURL = this.state.imageURL;

        return(
            <section className="single-composition">
                {
                    imageURL ?
                        <div className="single-composition__container">
                            <h2 className="single-composition__title">{this.state.name}</h2>
                            <img src={this.state.imageURL} className="single-composition__image "/>

                            <p className="single-composition__description">{this.state.description}</p>
                            <p className="single-composition__audio">Audio</p>
                            <p className="single-composition__video">Video</p>

                            <Link to={`/single-composition/${id}/edit`} className="single-composition__link">
                                <button className="single-composition__button">Edit</button>
                            </Link>
                        </div> :

                        <h1 className="empty-data"><i className="fa fa-spinner fa-spin loading-icon"></i></h1>
                }
            </section>
        )
    }
}

export default SingleComposition;