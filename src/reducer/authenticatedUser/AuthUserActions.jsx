export function getUserInfo(username) {
    return dispatch => {
        dispatch(userLoading());
        const testUserInfo = {
            userName: username,
            salutation: 'Test Old Buddy'
        };
        //TODO replace this with an actual fetch call
        return Promise.resolve(testUserInfo).then((userInfo) => {
            dispatch(userLoadSuccess(userInfo));
        })
    }
}

export const USER_LOADING = 'USER_LOADING';
export function userLoading() {
    return {
        type: USER_LOADING
    }
}

export const USER_LOAD_SUCCESS = 'USER_LOAD_SUCCESS';
export function userLoadSuccess(userInfo) {
    return {
        type: USER_LOAD_SUCCESS,
        data: userInfo
    }
}

export const USER_LOAD_FAILURE = 'USER_LOAD_FAILURE';
export function userLoadFailure() {
    return {
        type: USER_LOAD_FAILURE
    }
}

