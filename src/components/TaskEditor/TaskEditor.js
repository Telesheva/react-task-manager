import React, {useEffect, useState} from 'react';
import './TaskEditor.css';
import {Button} from 'shards-react';
import FormContainer from "../../hoc/FormContainer/FormContainer";
import {useDispatch, useSelector} from "react-redux";
import {editTaskSuccess, fetchTaskById} from "../../store/actions/task";
import moment from "moment";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Loader from "../UI/Loader/Loader";

const TaskEditor = props => {
    const dispatch = useDispatch();

    const id = props.location.pathname.substr(6);

    useEffect(() => {
        dispatch(fetchTaskById(id));
    }, [dispatch, id]);

    const {task} = useSelector(state => state.task);
    const [editTask, setTask] = useState({
        taskTitle: '',
        taskBody: '',
    });
    useEffect(() => {
        if (task)
            setTask({...editTask, taskTitle: task.taskTitle, taskBody: task.taskBody})
    }, [task]);


    return (
        <div className="Task-editor">
            {task ?
                <FormContainer>
                    < Input
                        placeholder="Task Title"
                        className="edit-input"
                        value={editTask.taskTitle}
                        onChange={event => setTask({...editTask, taskTitle: event.target.value})}
                        errorMessage="Task title can`t be empty!"
                    />
                    <Textarea
                        placeholder="Enter your task"
                        value={task ? editTask.taskBody : ''}
                        onChange={event => setTask({...editTask, taskBody: event.target.value})}
                        errorMessage="Enter your task!"
                    />
                    <Button
                        theme="primary"
                        className="save-btn"
                        onClick={() => dispatch(editTaskSuccess({
                            id,
                            taskTitle: editTask.taskTitle,
                            taskBody: editTask.taskBody,
                            date: moment(Date.now()).format('ll')
                        }))}
                        disabled={editTask.taskTitle === '' || editTask.taskBody === ''}
                    >
                        Save changes
                    </Button>
                </FormContainer>
                : <Loader/>
            }
        </div>
    )
};

export default TaskEditor;