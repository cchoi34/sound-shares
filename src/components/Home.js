import React from "react";
import * as firebase from 'firebase';
import Compositions from './Compositions';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Christopher Choi",
            imageURL: "https://image.shutterstock.com/image-vector/lamps-hanging-above-line-drawing-600w-1549579187.jpg",
            videoURL: "https://youtu.be/mYAmSXpeFjM",
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();

        const nameRef = rootRef.child('name');
        nameRef.on('value', snap => {
            this.setState({
                name: snap.val(),
            })
        })

        const imageRef = rootRef.child('imageURL');
        imageRef.on('value', snap => {
            this.setState({
                imageURL: snap.val(),
            })
        })
    }

    render() {
        return (
            <section className="home">
                <h1 className="home__heading-primary">Welcome {this.state.name}, to Quick Mash!</h1>
                <Compositions />
            </section>
        )
    }
}

export default Home;