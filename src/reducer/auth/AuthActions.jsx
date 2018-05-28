import {getUserInfo} from "../authenticatedUser/AuthUserActions";
import {getUserTasks} from "../task/TaskActions";

export function authenticate(username, password) {
    return dispatch => {
        //TODO replace this with an actual fetch call
        if(username === 'testUser' && password === 'testPass') {
            return Promise.resolve().then(() => {
                dispatch(userAuthenticated(username));
                dispatch(getUserInfo(username));
                dispatch(getUserTasks(username))
            })
        } else {
            return Promise.reject();
        }
    }
}

//TODO replace principal with auth token
export const  USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export function userAuthenticated(userPrincipal) {
    return {
        type: USER_AUTHENTICATED,
        userPrincipal
    }
}