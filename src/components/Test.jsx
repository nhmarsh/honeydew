import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Test extends Component {

    render() {
        return <div>Hello there! <Link to="/">Click here to go back!</Link></div>
    }

}

export default Test;