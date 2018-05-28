import React, {Component} from 'react';
import './css/App.css';
import {Route, BrowserRouter as Router,} from "react-router-dom";
import Login from "./components/layout/unauthenticated/Login";
import autoBind from "react-autobind";
import {Switch} from "react-router";
import AuthenticatedRouteContainer from "./AuthenticatedRouteContainer";

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
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/login" component={Login}/>
                        <Route path="/authenticated" component={AuthenticatedRouteContainer} />
                        <Route path="*" component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;