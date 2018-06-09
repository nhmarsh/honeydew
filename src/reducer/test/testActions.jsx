//Test actions file
//Contains a synchronous and asynchronous action to do the same thing
export const TEST_INCREMENT_ACTION_SYNC = 'TEST_INCREMENT_ACTION_SYNC';

export function testIncrementActionSync(incrementBy) {
    return {
        type: TEST_INCREMENT_ACTION_SYNC,
        incrementBy
    }
}

export function testIncrementActionAsync(incrementBy) {
    return dispatch => {
        Promise.resolve().then(() => {
           dispatch(testIncrementActionSync(incrementBy));
        });
    }
}