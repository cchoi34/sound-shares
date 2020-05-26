import React from "react";
import Compositions from './Compositions';
import SignIn from './SignIn';
import { nullProps } from "../types/types";

type HomeStateType = {
    name: string
}

class Home extends React.Component<nullProps, HomeStateType> {
    constructor(props: nullProps) {
        super(props);
        this.state = {
            name: "Christopher Choi",
        };
    }

    render() {
        return (
            <section className="home">
                <h1 className="home__heading-primary">Welcome {this.state.name}, to Quick Comps!</h1>
                <Compositions empty={null} />
            </section>
        )
    }
}

export default Home;