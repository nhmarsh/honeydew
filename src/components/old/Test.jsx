import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Test extends Component {

    constructor(props) {
        super(props);

        this.incrementSync = this.incrementSync.bind(this);
        this.incrementAsync = this.incrementAsync.bind(this);
    }

    incrementSync() {
        this.props.incrementSync(5);
    }

    incrementAsync() {
        this.props.incrementAsync(3);
    }


    render() {
        return <div>
            Hello there!
            <Link to="/">Click here to go back!</Link>
            <div><button onClick={this.incrementSync}>Click here to increment synchronously by 5!</button></div>
            <div><button onClick={this.incrementAsync}>Click here to increment synchronously by 3!</button></div>
            <div>Current counter is {this.props.counter}</div>
        </div>
    }

}

export default Test;