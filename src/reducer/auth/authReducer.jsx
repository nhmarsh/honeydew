import {USER_AUTHENTICATED} from "./authActions";

const initialState = {};


export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case USER_AUTHENTICATED:
            return {userPrincipal: action.userPrincipal};
        default:
            return state;
    }
}
