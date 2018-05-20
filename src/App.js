import React, { Component } from 'react';
import './css/App.css';
import {Route,   BrowserRouter as Router,} from "react-router-dom";

//We can simply instantiate Containers the same way we would instantiate components.
class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                {/*<Route exact path="/" component={OldMain} />*/}
            </div>
        </Router>
    );
  }
}

export default App;
