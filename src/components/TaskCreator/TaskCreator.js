import React, {useState} from 'react';
import uuidv1 from 'uuid/v1';
import is from 'is_js';
import './TaskCreator.css';
import FormContainer from "../../hoc/FormContainer/FormContainer";
import {Button} from 'shards-react';
import {addTask} from "../../store/actions/task";
import {useDispatch} from "react-redux";
import moment from "moment";
import {Redirect, withRouter} from "react-router";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";

const TaskCreator = () => {
    const [isCreated, setIsCreated] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const dispatch = useDispatch();

    const [task, setTask] = useState({
        taskTitle: '',
        taskBody: '',
        isFavorite: false
    });

    const [valid, setValid] = useState({
        validTitle: false,
        validTask: false
    });

    const onTaskCreated = () => (
        <Redirect to={'/'}/>
    );

    const onCreateButtonHandler = () => {
        dispatch(addTask({
            id: uuidv1(),
            ...task,
            date: Date.now(),
            isFavorite: isClicked
        }));
        setIsCreated(!isCreated);
    };

    return (
        <div className="TaskCreator">
            <FormContainer>
                <Input
                    size="sm"
                    placeholder="Task Title"
                    className="create-input"
                    onChange={event => {
                        setTask({...task, taskTitle: event.target.value});
                        setValid({...valid, validTitle: !(is.empty(event.target.value))});
                    }}
                    errorMessage="Task title can't be empty!"
                />
                <Textarea
                    placeholder="Enter your task"
                    className="create-input"
                    onChange={event => {
                        setTask({...task, taskBody: event.target.value});
                        setValid({...valid, validTask: !(is.empty(event.target.value))});
                    }}
                    errorMessage="Task can't be empty!"
                />
                <div className="favorites-checkbox">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span
                            className="slider round"
                            onClick={() => setIsClicked(!isClicked)}
                        />
                    </label>
                    <span className="add-btn-label">Add to favorites</span>
                </div>
                <Button
                    theme="primary"
                    onClick={onCreateButtonHandler}
                    disabled={!valid.validTitle || !valid.validTask}
                >
                    <span>Create task</span>
                    {isCreated ? onTaskCreated() : null}
                </Button>
            </FormContainer>
        </div>
    )
};

export default withRouter(TaskCreator);
