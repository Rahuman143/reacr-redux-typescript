import React, { Component } from "react";
import Button from "./CounterButton"


interface Props {
    increment: () => void;
    decrement: () => void;
    count: number;
}

class HomePage extends Component {

    render(): JSX.Element {
        const { count, increment, decrement } = this.props as Props;
        return (
            <div style={{   textAlign: 'center', marginTop: '40px', fontSize: '2rem' }}>
                <span>{count}</span>
                <Button handleClick={increment} color={'blue'}>Increment</Button>
                   
                   <Button handleClick={decrement} color={'pink'}>Decrement</Button>
            </div>
        );

    }

}


export default HomePage