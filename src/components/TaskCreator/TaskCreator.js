import React from 'react';
import './TaskCreator.css';
import withTaskForm from "../../hoc/withTaskForm/withTaskForm";
import { Button } from 'shards-react';

const TaskCreator = props => {
    return (
        <div className="TaskCreator">
            <div className="favorites-checkbox">
            <label className="switch">
                <input type="checkbox"/>
                    <span className="slider round"/>
            </label>
            <span className="add-btn-label">Add to favorites</span>
            </div>
            <Button theme="primary">Create task</Button>
        </div>
    )
};

export default withTaskForm(TaskCreator, "Create your task");
