import {USER_AUTH_FAILED, USER_AUTHENTICATED, USER_LOG_OUT} from "./AuthActions";

const initialState = {
    authenticated: false,
    authenticationFailed: false
};


export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case USER_AUTHENTICATED:
            return Object.assign({}, state, {authenticated: true, authenticationFailed: false});
        case USER_AUTH_FAILED:
            return Object.assign({}, state, {authenticated: false, authenticationFailed: true});
        case USER_LOG_OUT:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}
