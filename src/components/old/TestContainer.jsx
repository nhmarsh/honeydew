

import {testIncrementActionAsync, testIncrementActionSync} from "../../reducer/test/testActions";
import {connect} from "react-redux";
import Test from "./Test";

const mapStateToProps = state => {
    return {
        counter: state.test.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        incrementSync: amount=> dispatch(testIncrementActionSync(amount)),
        incrementAsync: amount => dispatch(testIncrementActionAsync(amount))
    }
};

const TestContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);

export default TestContainer;
