import React from "react";
import { IDeleteProps } from "../types/types";

const DeleteWarning: React.FC<IDeleteProps> = (props) => {
    return(
        <section className="delete-warning">
            <div className="delete-warning__container" >
                <div className="delete-warning__popup">
                    <h2 className="delete-warning__header">Are you sure you want to delete this composition?</h2>
                    <p className="delete-warning__text">(Deleting can not be undone)</p>
                    <button className="delete-warning__button"
                            onClick={() => {
                                props.togglePopup();
                                props.handleDelete(props.id);
                            }}
                        >Yes, delete it</button>

                    <button className="delete-warning__button"
                            onClick={() => {
                                props.togglePopup();
                            }}
                    >No, nevermind</button>
                </div>
            </div>
        </section>
    )
}

export default DeleteWarning;