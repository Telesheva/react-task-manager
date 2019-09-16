import React from 'react';
import './TaskEditor.css';
import withTaskForm from "../../hoc/withTaskForm/withTaskForm";
import { Button } from 'shards-react';

const TaskEditor = props => {
    return (
            <Button theme="primary">Save changes</Button>
    )
};

export default withTaskForm(TaskEditor, "Now you can edit the task");
