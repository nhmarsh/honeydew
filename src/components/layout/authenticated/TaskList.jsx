import React from 'react';
import {connect} from "react-redux";
import {addTask, getUserTasks} from "../../../reducer/task/TaskActions";
import Task from "../../task/Task";
import autoBind from "react-autobind";
import {STATE_TO_DO} from "../../../constants/TaskConstants";
import axios from 'axios';

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        autoBind(this);
    }

    componentDidMount() {
        this.props.refreshTasks(this.props.userName)
    }

    buildTaskList() {
        let tasks = [];
        for(let i = 0; i < this.props.numTasks; i++) {
            tasks.push(<Task index={i} />);
        }

        return tasks;
    }

    addTask() {
        this.props.addTask({
            id: 0,
            name: '',
            state: STATE_TO_DO,
            subTasks: [],
            dirty: true
        });
    }

    test() {
        axios.get('http://localhost:8080/springjwt/test').then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        console.log('building task list');
        return <div>
            {this.buildTaskList()}
            <button onClick={this.addTask}>Add a task!</button>
            <button onClick={this.test}> Test</button>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        numTasks: state.tasks.taskInfo.length,
        userName: state.auth.userPrincipal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        refreshTasks: (username) => dispatch(getUserTasks(username)),
        addTask: (task) => dispatch(addTask(task))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

//Export un-connected component for pure Jest test
export {TaskList as TaskListUnconnected};