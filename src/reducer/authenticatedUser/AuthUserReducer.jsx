
import {USER_LOAD_FAILURE, USER_LOAD_SUCCESS, USER_LOADING} from "./AuthUserActions";

const initialState = {};


export default function authUserReducer(state = initialState, action) {
    switch(action.type) {
        case USER_LOADING:
            return {...state, userLoading: true};
        case USER_LOAD_SUCCESS:
            return {...state, userLoading: false, userLoaded: true, userInfo: action.data};
        case USER_LOAD_FAILURE:
            return {...state, userLoading: false, userLoaded: false};
        default:
            return state;
    }
}
