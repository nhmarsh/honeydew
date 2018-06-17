
import {
    ADD_TASK,
    REMOVE_TASK, TASK_DONE_SYNCING,
    TASK_SYNCING,
    TASKS_LOAD_FAILURE,
    TASKS_LOAD_SUCCESS,
    TASKS_LOADING,
    UPDATE_TASK
} from "./TaskActions";

const initialState = {
    tasksLoading: false,
    taskInfo: [],
    tasksLoaded: false,
    errorMsg: ''
};


export default function taskReducer(state = initialState, action) {
    switch(action.type) {
        case TASKS_LOADING:
            return Object.assign({},
                state,
                {
                    tasksLoading: true
                }
            );
        case TASKS_LOAD_SUCCESS:

            return Object.assign({},
                state,
                {
                    tasksLoading: false,
                    tasksLoaded: true,
                    taskInfo: action.taskInfo
                }
            );
        case TASKS_LOAD_FAILURE:
            return Object.assign({},
                state,
                {
                    tasksLoading: true,
                    tasksLoaded: false,
                    errorMsg: action.errorMsg
                }
            );
        case ADD_TASK:
            return Object.assign({},
                state,
                {
                    tasksLoading: true,
                    tasksLoaded: false,
                    errorMsg: action.errorMsg,
                    taskInfo: insertItem(state.taskInfo, state.taskInfo.length, action.task)
                }
            );
        case REMOVE_TASK:
            return Object.assign({},
                state,
                {
                    tasksLoading: true,
                    tasksLoaded: false,
                    errorMsg: action.errorMsg,
                    taskInfo: removeItem(state.taskInfo, action.index)
                }
            );
        case UPDATE_TASK:
            return Object.assign({},
                state,
                {
                    tasksLoading: true,
                    tasksLoaded: false,
                    errorMsg: action.errorMsg,
                    taskInfo: updateItem(state.taskInfo, action.index, action.updatedProps)
                }
            );
        case TASK_SYNCING:
            return Object.assign(
                {},
                state,
                {
                    taskInfo: updateItem(state.taskInfo, action.index, {syncing: true})
                }

            );
        case TASK_DONE_SYNCING: {
            return Object.assign(
                {},
                state,
                {
                    taskInfo: updateItem(state.taskInfo, action.index, {syncing: !!action.success, dirty: !action.success, errorMsg: action.errorMsg})
                }

            );
        }
        default:
            return state;
    }
}

function insertItem(array, index, item) {
    let newArray = array.slice();
    newArray.splice(index, 0, item);
    return newArray;
}

function removeItem(array, index) {
    let newArray = array.slice();
    newArray.splice(index, 1);
    return newArray;
}

//pure function to update an item with new props so long as those props are shallow.
//So keep it shallow
//TODO This may or may not be effective.
function updateItem(array, index, updatedProps) {
    return array.map((item, itemIndex) => {
        if(index === itemIndex) {
            return Object.assign({}, item, {...updatedProps});
        }

        return item;
    })
}