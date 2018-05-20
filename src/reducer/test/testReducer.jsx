import {TEST_INCREMENT_ACTION_SYNC} from "./testActions";

//reducer for state.test
const initialState = {counter: 0};

export default function testReducer(state = initialState, action) {
    switch(action.type) {
        case TEST_INCREMENT_ACTION_SYNC:
            return {counter: state.counter + action.incrementBy};
        default:
            return state;
    }
}
