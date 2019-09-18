import React, {useCallback, useState} from 'react';
import './TaskCreator.css';
import withTaskForm from "../../hoc/withTaskForm/withTaskForm";
import { Button } from 'shards-react';
import {addTask} from "../../store/actions/create";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

const TaskCreator = props => {
    const {tasks} = useSelector(state => state.create, shallowEqual);
    const [isCreated, setIsCreated] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className="TaskCreator">
            <div className="favorites-checkbox">
            <label className="switch">
                <input type="checkbox"/>
                    <span className="slider round"/>
            </label>
            <span className="add-btn-label">Add to favorites</span>
            </div>
                <Button
                    theme="primary"
                    onClick={useCallback(() => {
                        dispatch(addTask({id: 1, task: 'Be cool!'}));
                        setIsCreated(!isCreated)
                    },
                        [dispatch])}
                >
                    { !isCreated ? <span>Create task</span> : <span>Task is created!</span> }
                </Button>
        </div>
    )
};

export default withTaskForm(TaskCreator, "Create your task");
