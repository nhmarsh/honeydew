import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.svg';

class OldMain extends Component {


    render() {
        return ( <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Link to="/test">Click here to go to the tets page!</Link>
        </div>);
    }
}

export default OldMain;
