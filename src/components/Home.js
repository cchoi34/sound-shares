import React from "react";
import Compositions from './Compositions';
import SignIn from './SignIn';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Christopher Choi",
        };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <section className="home">
                <h1 className="home__heading-primary">Welcome {this.state.name}, to Quick Comps!</h1>
                <Compositions />
            </section>
        )
    }
}

export default Home;