import React, { Component } from 'react';
import {connect} from "react-redux";


class AuthenticatedLanding extends React.Component {

    render() {
        return <div>You have logged in as {this.props.user.userInfo.salutation}</div>
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedLanding);

//Export un-connected component for pure Jest test
export {AuthenticatedLanding as LandingUnconnected};