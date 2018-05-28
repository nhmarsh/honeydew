//This file simply combines all the reducers we've built into a single export, so that src/index.js can import it with the statement
//import reducer from './reducer';
import {combineReducers} from 'redux';
import testReducer from "./test/testReducer";
import authReducer from "./auth/authReducer";

//When we perform a mapStateToProps now,
//testReducer's state ({counter: 0}) will be available as state.test
export default combineReducers({
    test: testReducer,
    auth: authReducer
});