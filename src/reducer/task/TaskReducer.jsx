
import {TASKS_LOAD_FAILURE, TASKS_LOAD_SUCCESS, TASKS_LOADING} from "./TaskActions";

const initialState = {};


export default function taskReducer(state = initialState, action) {
    switch(action.type) {
        case TASKS_LOADING:
            return {...state, tasksLoading: true};
        case TASKS_LOAD_SUCCESS:
            return {...state, tasksLoading: false, tasksLoaded: true, tasks: action.data};
        case TASKS_LOAD_FAILURE:
            return {...state, tasksLoading: false, tasksLoaded: false};
        default:
            return state;
    }
}
