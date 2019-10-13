import React, {useState} from 'react';
import uuidv1 from 'uuid/v1';
import './TaskCreator.css';
import WithForm from "../../hoc/WithForm/WithForm";
import {Button, FormInput, FormTextarea} from 'shards-react';
import {addTask} from "../../store/actions/task";
import {useDispatch} from "react-redux";
import moment from "moment";
import {Redirect, withRouter} from "react-router";

const TaskCreator = () => {
    const [isCreated, setIsCreated] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');

    const [validTitle, setValidTitle] = useState(false);
    const [validTask, setValidTask] = useState(false);

    const onTaskCreated = () => (
        <Redirect to={'/'}/>
    );

    return (
        <div className="TaskCreator">
            <WithForm>
                <FormInput
                    size="sm"
                    placeholder="Task Title"
                    className="create-input"
                    onChange={event => {
                        setTitle(event.target.value);
                        setValidTitle(event.target.value);
                    }}
                    invalid={title === ''}
                />
                <FormTextarea
                    placeholder="Enter your task"
                    className="create-input"
                    onChange={event => {
                        setTask(event.target.value);
                        setValidTask(event.target.value);
                    }}
                    invalid={task === ''}
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
                    onClick={() => {
                            dispatch(addTask({
                                id: uuidv1(),
                                taskTitle: title,
                                task,
                                date: moment(Date.now()).format('ll'),
                                isFavorite: isClicked
                            }));
                        setIsCreated(!isCreated);
                    }}
                    disabled={!validTitle || !validTask}
                >
                    {
                        !isCreated ?
                            <span>Create task</span>
                            :
                            <React.Fragment>
                                {onTaskCreated()}
                            </React.Fragment>
                    }
                </Button>
            </WithForm>
        </div>
    )
};

export default withRouter(TaskCreator);
