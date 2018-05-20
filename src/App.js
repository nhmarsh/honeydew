import React, { Component } from 'react';
import './css/App.css';
import OldMain from "./components/OldMain";
import {Route,   BrowserRouter as Router,} from "react-router-dom";
import TestContainer from "./components/TestContainer";

//We can simply instantiate Containers the same way we would instantiate components.
class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={OldMain} />
                <Route exact path="/test" component={TestContainer} />
            </div>
        </Router>
    );
  }
}

export default App;
