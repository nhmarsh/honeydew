import {USER_AUTHENTICATED, USER_LOG_OUT} from "./AuthActions";

const initialState = {
    authenticated: false,
    authenticationAttempted: false
};


export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case USER_AUTHENTICATED:
            return Object.assign({}, state, {authenticated: true, authenticationAttempted: true});
        case USER_LOG_OUT:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}
