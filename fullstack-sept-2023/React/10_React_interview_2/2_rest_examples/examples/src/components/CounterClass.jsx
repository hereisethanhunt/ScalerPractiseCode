import React, { useState } from "react";

class CounterClass extends React.Component {
    constructor(props) {
        // optional
        super(props);


        this.state = {
            count: 0
        }
        // this.handleDecrement = this.handleDecrement.bind(this);
        // this.handleIncrement = this.handleIncrement.bind(this);
    }
    componentWillUnmount(){

    }
    componentDidUpdate(){

    }
    componentDidMount(){

    }
    // handler function 
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count -1  });
    }
// ui is printed
    render() {
        return (
            <div className="container">
                <button onClick={() =>  this.handleIncrement()}>+</button>
                <p>Count {this.state.count}</p>
                <button onClick={this.handleDecrement}>-</button>
                <h1>Hello</h1>
                <h2>I am a text</h2>
            </div>
        )
    }

}


export default CounterClass;