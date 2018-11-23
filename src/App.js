import React, {Component} from 'react';
import './css/App.css';
import {Route, BrowserRouter as Router,} from "react-router-dom";
import Login from "./components/layout/unauthenticated/Login";
import autoBind from "react-autobind";
import {Switch} from "react-router";
import AuthenticatedRouteContainer from "./AuthenticatedRouteContainer";
import {withCookies} from "react-cookie";

//We can simply instantiate Containers the same way we would instantiate components.
class App extends Component {

    constructor(props) {
        super(props);

        autoBind(this);
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" render={() => {return <Login cookies={this.props.cookies} />} }/>
                        <Route exact path="/login" render={() => {return <Login cookies={this.props.cookies} />}}/>
                        <Route path="/authenticated" render={() => {return <AuthenticatedRouteContainer cookies={this.props.cookies} />}} />
                        <Route path="*" render={() => {return <Login cookies={this.props.cookies} />}} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default withCookies(App);