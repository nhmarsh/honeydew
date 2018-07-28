import {getUserInfo} from "../authenticatedUser/AuthUserActions";
import {getUserTasks} from "../task/TaskActions";
import base64 from 'base-64';
import axios from 'axios';
export function authenticate(userName, password) {
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
                axios.defaults.headers.common['authorization'] = 'Bearer ' + response.data.access_token;
                dispatch(userAuthenticated(userName, password));
            }).catch((error, otherarg) => {
                console.log('Error retrieving credentials!' + error);
                delete axios.defaults.headers.common['authorization'];
        })
    }
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

