import React, { Component } from 'react';
import './css/App.css';
import Test from "./components/Test";
import OldMain from "./components/OldMain";
import {Route,   BrowserRouter as Router,} from "react-router-dom";


class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={OldMain} />
                <Route exact path="/test" component={Test} />
            </div>
        </Router>
    );
  }
}

export default App;
