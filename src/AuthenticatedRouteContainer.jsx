import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router";
import Landing from "./components/layout/authenticated/Landing";


class AuthenticatedRouteContainer extends React.Component {

    render() {
        return <div>
            {!!this.props.auth.userPrincipal ?
                <Route exact path="/authenticated/landing" component={Landing} />
            :
            <Redirect to="/login" />}
            </div>

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        currentURL: ownProps.location.pathname
    }
};


export default connect(mapStateToProps)(AuthenticatedRouteContainer);

//Export un-connected component for pure Jest test
export {AuthenticatedRouteContainer as LandingUnconnected};