import {USER_AUTHENTICATED} from "./AuthActions";

const initialState = {};


export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case USER_AUTHENTICATED:
            return {...state, userPrincipal: action.userPrincipal};
        default:
            return state;
    }
}
