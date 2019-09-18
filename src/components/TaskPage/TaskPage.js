import React, {Component} from 'react';
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

export default TaskPage;