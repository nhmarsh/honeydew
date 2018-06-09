import React, { Component } from 'react';
import {connect} from "react-redux";
import autoBind from "react-autobind";
import {removeTask, updateTask} from "../../reducer/task/TaskActions";


class Task extends React.Component {

    constructor(props) {
        super(props);

        autoBind(this);
    }

    onChangeId(event) {
        this.updateTask( {id: event.target.value})
    }

    onChangeName(event) {
        this.updateTask( {name: event.target.value})
    }

    onChangeState(event) {
        this.updateTask( {state: event.target.value})
    }

    updateTask(updatedProps) {
        this.props.updateTask(this.props.index, {...updatedProps, dirty: true});
    }

    removeTask() {
        this.props.removeSelf(this.props.index);
    }

    render() {
        console.log('rendering task ' + this.props.index);
        return <div>
            <div>id: <input type="text" value={this.props.task.id} onChange={this.onChangeId} /> </div>
            <div>name: <input type="text" value={this.props.task.name} onChange={this.onChangeName} /> </div>
            <div>state: <input type="text" value={this.props.task.state} onChange={this.onChangeState} /> </div>
            <div>subtasks: {this.props.task.subTasks ? this.props.task.subTasks.length : "No subtasks"}</div>
            <div>Dirty: {this.props.task.dirty ? "Dirty" : "Clean"}</div>
            <div><button onClick={this.removeTask}>Remove me</button></div>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        task: state.tasks.taskInfo[ownProps.index]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateTask: (index, updatedProps) => {dispatch(updateTask(index, updatedProps))},
        removeSelf: (index) => {dispatch(removeTask(index))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);

//Export un-connected component for pure Jest test
export {Task as TaskUnconnected};