import React, {Component} from 'react';
import {connect} from "react-redux";
import TaskList from "../../components/TaskList/TaskList";

class TaskPage extends Component {
    render() {
        return (
            <div className="TaskPage">
                <TaskList/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTask: () => dispatch(addTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);