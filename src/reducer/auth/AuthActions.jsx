import base64 from 'base-64';
import axios from 'axios';
import {authCookieName, setAxiosAuth} from "../../axios-config";

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
                dispatch(userAuthenticated(userName, password));
            }).catch((error, otherarg) => {
                console.log('Error retrieving credentials!' + error);
                delete axios.defaults.headers.common['authorization'];
                cookies.expire(authCookieName);
        })
    }
}

export function attemptReauthentication(cookies) {
    //Try to ping the server. If it works, our token is still valid
    //Otherwise we're invalid
}

//TODO replace principal with auth token
export const  USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export function userAuthenticated(userPrincipal, password) {
    return {
        type: USER_AUTHENTICATED,
        userPrincipal,
        password
    }
}

export const USER_LOG_OUT = 'USER_LOG_OUT';
export function userLogOut() {
    return {
        type: USER_LOG_OUT
    }
}

