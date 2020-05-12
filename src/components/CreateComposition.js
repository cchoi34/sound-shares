import React from 'react';

class CreateComposition extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <section className="create-composition">
                <h1 className="create-composition__header header-primary">Upload a Composition</h1>

                <div className="create-composition__form-container">
                    <form className="create-composition__form">
                        <label htmlFor="name" className="create-composition__label">Name</label>
                        <input type="text" className="create-composition__input" placeholder="Name" id="name" />

                        <label htmlFor="imageURL" className="create-composition__label">Image-URL</label>
                        <input type="text" className="create-composition__input" placeholder="https://www.example.com/example.png" id="imageURL" />
                    </form>
                    <button className="create-composition__button button">
                        Submit
                    </button>
                </div>
            </section>
        )
    }
}

export default CreateComposition;