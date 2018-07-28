import {USER_AUTHENTICATED, USER_LOG_OUT} from "./AuthActions";

const initialState = {
    userPrincipal: '',
    password: ''
};


export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case USER_AUTHENTICATED:
            return Object.assign({}, state, {userPrincipal: action.userPrincipal, password: action.password});
        case USER_LOG_OUT:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}
