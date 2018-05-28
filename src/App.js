import React, {Component} from 'react';
import './css/App.css';
import {Route, BrowserRouter as Router,} from "react-router-dom";
import Login from "./components/layout/unauthenticated/Login";
import {connect} from "react-redux";
import {authenticate} from "./reducer/auth/authActions";
import autoBind from "react-autobind";
import OldMain from "./components/old/OldMain";
import {Redirect} from "react-router";

//We can simply instantiate Containers the same way we would instantiate components.
class App extends Component {

    constructor(props) {
        super(props);

        autoBind(this);
    }

    getLogin() {
        return <Login checkLogin={this.checkLogin}/>
    }

    checkLogin(username, password) {
        let self = this;
        return self.props.checkLogin(username, password).then(() => {
            //TODO use saved target instead of constant
            return <Redirect to="/landing" />
        });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={this.getLogin}/>
                    <Route exact path="/login" component={this.getLogin}/>
                    <Route exact path="/landing" component={OldMain}/>
                </div>
            </Router>
        );
    }
}

//TODO probably don't need this
const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkLogin: (un, pw) => dispatch(authenticate(un, pw))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
