import React from 'react';
import './withTaskFrom.css';
import {FormInput, FormTextarea} from "shards-react";

const withTaskForm = (Task, title) => {
    return () => {
        return (
            <div className="task-form">
                <form className="form-creator">
                    <h2 className="form-title">{ title }</h2>
                    <FormInput
                        size="sm"
                        placeholder="Task Title"
                        className="create-input"
                    />
                    <FormTextarea
                        placeholder="Enter your task"
                        className="create-input"
                    />
                    <Task/>
                </form>
            </div>
        )
    }
};

export default withTaskForm;