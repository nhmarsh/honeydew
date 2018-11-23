import React from 'react';
import {connect} from "react-redux";
import autoBind from "react-autobind";
import {Button, ControlLabel, FormControl, FormGroup, HelpBlock} from "react-bootstrap";
import {Redirect} from "react-router";
import {authenticate} from "../../../reducer/auth/AuthActions";


class Login extends React.Component {

    constructor(props) {
        super(props);

        autoBind(this);

        this.state = {
            usernameValid: null,
            passwordValid: null,
            loginFailed: false
        }
    }

    submitLogin(event) {
        event.preventDefault();

        console.log(event);
        console.log(this.userName.value);
        console.log(this.password.value);

        let usernameValidity = this.state.usernameValid;
        let passwordValidity = this.state.passwordValid;
        if(!this.userName.value) {
            usernameValidity = 'error';
        } else {
            usernameValidity = null;
        }
        if(!this.password.value) {
            passwordValidity = 'error';
        } else {
            passwordValidity = null;
        }

        if(!usernameValidity && !passwordValidity) {
            this.props.checkLogin(this.userName.value, this.password.value, this.props.cookies)
                .then(() => {this.setState({redirect: <Redirect to="/authenticated/landing" />})})
                .catch((err) => {
                    console.log(err);
                    this.setState({
                        usernameValid: usernameValidity,
                        passwordValid: passwordValidity,
                        loginFailed: true
                    });
                })
        } else {
            this.setState({
                usernameValid: usernameValidity,
                passwordValid: passwordValidity
            });
        }


    }

    render() {
        return (
            //TODO
            //Is there really value in using a form here?
            <div>
                {this.state.redirect ||
                    <form onSubmit={this.submitLogin}>
                        <FormGroup validationState={this.state.usernameValid}>
                            <ControlLabel htmlFor="userName">Username</ControlLabel>
                            <FormControl type="text" id="userName" inputRef={(un) => this.userName = un} />
                            <FormControl.Feedback />
                            {this.state.usernameValid === 'error' && <HelpBlock>Please enter a username</HelpBlock>}
                        </FormGroup>

                        <FormGroup validationState={this.state.passwordValid}>
                            <ControlLabel htmlFor="password">Password</ControlLabel>
                            <FormControl type="password" id="password" inputRef={(pw) => this.password = pw}/>
                            <FormControl.Feedback />
                            {this.state.passwordValid === 'error' && <HelpBlock>Please enter a password</HelpBlock>}
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit">Submit</Button>
                        </FormGroup>
                        {this.state.loginFailed && <HelpBlock>Username or password is incorrect</HelpBlock>}
                </form> }
            </div>
        )
    }
}

//TODO probably don't need this
const mapStateToProps = (state, ownProps) => {
    return {
        cookies: ownProps.cookies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkLogin: (un, pw, cookies) => dispatch(authenticate(un, pw, cookies))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);