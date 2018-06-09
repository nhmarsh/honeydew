import {STATE_DONE, STATE_IN_PROGRESS, STATE_TO_DO} from "../../constants/TaskConstants";

export function getUserTasks(username) {
    return dispatch => {
        dispatch(tasksLoading());
        const testTaskInfo = [
            {
                id: 1,
                name: 'Task 1, to do',
                state: STATE_TO_DO
            },
            {
                id: 2,
                name: 'Task 2, to do with subtasks',
                state: STATE_TO_DO,
                subTasks: [
                    {
                        id: 1,
                        parentId: 2,
                        name: 'Subtask 1, to do',
                        state: STATE_TO_DO
                    },
                    {
                        id: 2,
                        parentId: 2,
                        name: 'Subtask 2, to do',
                        state: STATE_TO_DO
                    }
                ]
            },
            {
                id: 3,
                name: 'Task 3, in progress with history',
                state: STATE_IN_PROGRESS,
                history: [
                    {
                        date: '5-26-2018',
                        notes: 'Did a thing',
                        newState: STATE_IN_PROGRESS
                    }
                ]
            },
            {
                id: 4,
                name: 'Task 4, done',
                state: STATE_DONE,
                history: [
                    {
                        date: '5-26-2018',
                        notes: 'Did a thing',
                        newState: STATE_IN_PROGRESS
                    },
                    {
                        date: '5-27-2018',
                        notes: 'FINISHED A THING',
                        newState: STATE_DONE
                    }
                ]
            }
        ];
        //TODO replace this with an actual fetch call
        return Promise.resolve(testTaskInfo).then((userInfo) => {
            dispatch(taskLoadSuccess(userInfo));
        });
    }
}

export const TASKS_LOADING = 'TASKS_LOADING';
export function tasksLoading() {
    return {
        type: TASKS_LOADING
    }
}

export const TASKS_LOAD_SUCCESS = 'TASKS_LOAD_SUCCESS';
export function taskLoadSuccess(taskInfo) {
    return {
        type: TASKS_LOAD_SUCCESS,
        taskInfo: taskInfo
    }
}

export const TASKS_LOAD_FAILURE = 'TASKS_LOAD_FAILURE';
export function taskLoadFailure(errorMsg) {
    return {
        type: TASKS_LOAD_FAILURE,
        errorMsg: errorMsg
    }
}

export const ADD_TASK = 'ADD_TASK';
export function addTask(task) {
    return {
        type: ADD_TASK,
        task: task
    };
}

export const REMOVE_TASK = 'REMOVE_TASK';
export function removeTask(index) {
    return {
        type: REMOVE_TASK,
        index: index
    };
}

export const UPDATE_TASK = 'UPDATE_TASK';
export function updateTask(index, updatedProps) {
    return {
        type: UPDATE_TASK,
        index: index,
        updatedProps: updatedProps
    }
}

export const SYNC_TASK = 'SYNC_TASK';
export function syncTask(index, taskData) {
    return dispatch => {
        dispatch(taskSyncing(index));
        //TODO axios call here
        if(index === 5) {
            return Promise.reject('Test').finally(error => {
                dispatch(taskDoneSyncing(index, false, error));
            })
        }

        return Promise.resolve().finally(() => {
            dispatch(taskDoneSyncing(index, true));
        });
    }
}

export const TASK_SYNCING = 'TASK_SYNCING';
export function taskSyncing(index) {
    return {
        type: TASK_SYNCING,
        index: index
    }
}

export const TASK_DONE_SYNCING = 'TASK_DONE_SYNCING';
export function taskDoneSyncing(index, success, errorMsg) {
    return {
        type: TASK_SYNCING,
        index: index,
        success: success,
        errorMsg: errorMsg
    }
}
