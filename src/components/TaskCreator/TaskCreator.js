import React, {useState} from 'react';
import './TaskCreator.css';
import withTaskForm from "../../hoc/withTaskForm/withTaskForm";
import {Button} from 'shards-react';
import {addTask} from "../../store/actions/task";
import {useDispatch} from "react-redux";
import {Alert} from "antd";
import moment from "moment";
import {withRouter} from "react-router";
import Loader from "../UI/Loader/Loader";

const TaskCreator = props => {
    const [isCreated, setIsCreated] = useState(false);
    const dispatch = useDispatch();

    const renderForm = () => {
        return (

        )
    };

    const onAlertClose = () => {
       /* const {history} = props;
        console.log(history);
        props.history.push('/');*/
    };

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
                onClick={() => {
                    dispatch(addTask({
                        id: 1,
                        taskTitle: props.inputTitle,
                        task: props.inputTask,
                        date: moment(Date.now()).format('ll')
                    }));
                    setIsCreated(!isCreated);
                }}
                disabled={isCreated}
            >
                {
                    !isCreated ?
                        <span>Create task</span>
                        :
                        <Loader/>
                }
            </Button>
      {/*      {
                isCreated ?
                    <Alert
                        message="New task was created successfully!"
                        type="success"
                        className="alert-success alert"
                    />
                    : null
            }*/}
        </div>
    )
};

export default withTaskForm(withRouter(TaskCreator), "Create your task");
