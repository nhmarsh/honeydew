import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router";
import Landing from "./components/layout/authenticated/Landing";
import autoBind from "react-autobind";
import axios from "axios/index";
import {authenticate, USER_LOG_OUT, userLogOut} from "./reducer/auth/AuthActions";

class AuthenticatedRouteContainer extends React.Component {

    constructor(props) {
        super(props);


        autoBind(this);
    }

    componentDidMount() {
        var self = this;
        axios.interceptors.response.use(function (response) {
            // Do something with response data
            return response;
        }, function (error) {
            // Do something with response error
            if(error.status === 401) {
                self.props.authenticate(self.props.auth.userPrincipal, self.props.auth.password).then((response) => {
                    console.log('Token expired! Retrying...');
                    axios.request(error.config);
                }).catch((error) => {
                    console.log('Token refresh failed! Logging out...')

                })
            }
        });
    }


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

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (username, password) => {
            return authenticate(username, password)
        },
        logOut: () => {
            return dispatch(userLogOut())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRouteContainer);

//Export un-connected component for pure Jest test
export {AuthenticatedRouteContainer as LandingUnconnected};