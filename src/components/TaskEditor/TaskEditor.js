import React, {useEffect, useState} from 'react';
import './TaskEditor.css';
import {Button} from 'shards-react';
import FormContainer from "../../hoc/FormContainer/FormContainer";
import {useDispatch, useSelector} from "react-redux";
import {editTask, fetchTaskById} from "../../store/actions/task";
import moment from "moment";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Loader from "../UI/Loader/Loader";
import {Redirect} from "react-router";

const TaskEditor = props => {
    const dispatch = useDispatch();
    const [isEdited, setIsEdited] = useState(false);

    const id = props.location.pathname.substr(6);

    useEffect(() => {
        dispatch(fetchTaskById(id));
    }, [dispatch, id]);

    const {task, loading, error} = useSelector(state => state.task);
    if (error) {
        throw new Error(error);
    }

    const [editedTask, setTask] = useState({
        taskTitle: '',
        taskBody: '',
    });
    useEffect(() => {
        if (task)
            setTask({...editedTask, taskTitle: task.taskTitle, taskBody: task.taskBody})
    }, [task]);

    const onSaveButtonHandler = () => {
        dispatch(editTask({
            id,
            taskTitle: editedTask.taskTitle,
            taskBody: editedTask.taskBody,
            date: moment(Date.now()).format('ll')
        }));
        setIsEdited(!isEdited);
    };

    const onTaskEdited = () => (
        <Redirect to={'/'}/>
    );

    return (
        <div className="Task-editor">
            {task && !loading ?
                <FormContainer>
                    < Input
                        placeholder="Task Title"
                        className="edit-input"
                        value={editedTask.taskTitle}
                        onChange={event => setTask({...editedTask, taskTitle: event.target.value})}
                        errorMessage="Task title can`t be empty!"
                    />
                    <Textarea
                        placeholder="Enter your task"
                        value={task ? editedTask.taskBody : ''}
                        onChange={event => setTask({...editedTask, taskBody: event.target.value})}
                        errorMessage="Enter your task!"
                    />
                    <Button
                        theme="primary"
                        className="save-btn"
                        onClick={onSaveButtonHandler}
                        disabled={editedTask.taskTitle === '' || editedTask.taskBody === ''}
                    >
                        Save changes
                    </Button>
                    {isEdited ? onTaskEdited() : null}
                </FormContainer>
                :
                    <Loader/>
            }
        </div>
    )
};

export default TaskEditor;