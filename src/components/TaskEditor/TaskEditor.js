import React, {useState} from 'react';
import './TaskEditor.css';
import {Button, FormInput, FormTextarea} from 'shards-react';
import WithForm from "../../hoc/WithForm/WithForm";
import {useDispatch, useSelector} from "react-redux";
import {editTaskSuccess} from "../../store/actions/task";
import moment from "moment";

const TaskEditor = props => {
    const {tasks} = useSelector(state => state.task);
    const taskID = props.location.pathname.substr(6);
    const currentTask = tasks.filter(el => el.id === taskID);

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');

    return (
        <WithForm>
            <FormInput
                placeholder="Task Title"
                className="edit-input"
                defaultValue={currentTask[0].taskTitle}
                onChange={event => setTitle(event.target.value)}
            />

            <FormTextarea
                placeholder="Enter your task"
                className="edit-input"
                defaultValue={currentTask[0].task}
                onChange={event => setTask(event.target.value)}
            />
            <Button
                theme="primary"
                className="save-btn"
                onClick={() => dispatch(editTaskSuccess(taskID, {
                    id: taskID,
                    title,
                    task,
                    date: moment(Date.now()).format('ll')
                }))}
            >
                Save changes
            </Button>
        </WithForm>
    )
};

export default TaskEditor;
