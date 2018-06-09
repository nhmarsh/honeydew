import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../../logo.svg';
import {connect} from "react-redux";
import {testIncrementActionAsync, testIncrementActionSync} from "../../reducer/test/testActions";

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
            <div>Counter value = {this.props.counter}</div>
        </div>);
    }
}

//Proposing an alternative pattern to one class and one container per component
//Since we are never going to use this component without the container.
const mapStateToProps = state => {
    return {
        counter: state.test.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        incrementSync: amount=> dispatch(testIncrementActionSync(amount)),
        incrementAsync: amount => dispatch(testIncrementActionAsync(amount))
    }
};

const OldMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OldMain);


export default OldMain = OldMainContainer;
