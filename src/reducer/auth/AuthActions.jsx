import base64 from 'base-64';
import axios from 'axios';
import {authCookieName, clearAxiosAuth, setAxiosAuth} from "../../axios-config";

export function authenticate(userName, password, cookies) {
    return dispatch => {
        const clientId = 'testjwtclientid';
        const clientPass = 'jwtclientsecret';
        let authHeader = base64.encode(clientId + ":" + clientPass);
        const instance = axios.create({
            baseURL: 'http://localhost:8080/',
            headers: {"Authorization": "Basic " + authHeader}
        });
        return instance.post('/oauth/token?grant_type=password&username=' + userName + '&password=' + password)
            .then((response) => {
                if(cookies) {
                    cookies.set(authCookieName, response.data.access_token)
                }
                setAxiosAuth(response.data.access_token);
                dispatch(userAuthenticated());
            }).catch((error, otherarg) => {
                console.log('Error retrieving credentials!' + error);
                clearAxiosAuth();
                dispatch(userAuthFailed(cookies));
        })
    }
}

export function attemptReauthentication(cookies) {
    return dispatch => {
        if (cookies && cookies.get(authCookieName)) {
            setAxiosAuth(cookies.get(authCookieName));
        }
        axios.get('http://localhost:8080/springjwt/test').then((response) => {
            dispatch(userAuthenticated())
        }).catch((error) => {
            clearAxiosAuth();
            dispatch(userAuthFailed(cookies));
        });
    }
    //Try to ping the server. If it works, our token is still valid
    //Otherwise we're invalid
}

//TODO replace principal with auth token
export const  USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export function userAuthenticated() {
    return {
        type: USER_AUTHENTICATED
    }
}

export const USER_LOG_OUT = 'USER_LOG_OUT';
export function userLogOut(cookies) {
    cookies.remove(authCookieName);
    return {
        type: USER_LOG_OUT
    }
}

export const USER_AUTH_FAILED = 'USER_AUTH_FAILED';
export function userAuthFailed(cookies) {
    cookies.remove(authCookieName);
    return {
        type: USER_AUTH_FAILED
    }
}
