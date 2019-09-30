import React, {useState} from 'react';
import './withTaskFrom.css';
import {FormInput, FormTextarea} from "shards-react";

const withTaskForm = (Task, title) => {
    return () => {
        const [valueTitle, setValueTitle] = useState('');
        const [valueTask, setTaskValue] = useState('');
        return (
            <div className="task-form">
                <form className="form-creator">
                    <h2 className="form-title">{title}</h2>
                    <FormInput
                        size="sm"
                        placeholder="Task Title"
                        className="create-input"
                        onChange={event => setValueTitle(event.target.value)}
                    />
                    <FormTextarea
                        placeholder="Enter your task"
                        className="create-input"
                        onChange={event => setTaskValue(event.target.value)}
                    />
                    <Task
                        inputTitle={valueTitle}
                        inputTask={valueTask}
                    />
                </form>
            </div>
        )
    }
};

export default withTaskForm;