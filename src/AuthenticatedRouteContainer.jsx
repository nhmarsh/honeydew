import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router";
import Landing from "./components/layout/authenticated/Landing";
import autoBind from "react-autobind";
import {attemptReauthentication, authenticate, userLogOut} from "./reducer/auth/AuthActions";

class AuthenticatedRouteContainer extends React.Component {

    constructor(props) {
        super(props);


        autoBind(this);
    }

    componentDidMount() {
        if(!this.props.auth.authenticated) {
            this.props.attemptReauthentication(this.props.cookies);
        }
    }


    render() {
        return <div>
            {this.props.auth.authenticated ?
                <Route exact path="/authenticated/landing" component={Landing} />
            :
                this.props.auth.authenticationFailed ? <Redirect to="/login" /> : <div>loading...</div>}
            </div>

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        cookies: ownProps.cookies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (username, password) => {
            return authenticate(username, password)
        },
        attemptReauthentication: (cookies) => {
            return dispatch(attemptReauthentication(cookies))
        },
        logOut: () => {
            return dispatch(userLogOut())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRouteContainer);

//Export un-connected component for pure Jest test
export {AuthenticatedRouteContainer as LandingUnconnected};