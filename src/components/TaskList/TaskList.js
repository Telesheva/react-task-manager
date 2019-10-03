import React from 'react';
import Task from "../../components/Task/Task";
import './TaskList.css';
import Grid from "../UI/Grid/Grid";
import Button from "../UI/Button/Button";
import plusIcon from '../../images/plus.png';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const TaskList = () => {
    const {tasks} = useSelector(state => state.task);
    console.log(tasks);
    return (
        <div>
            <div className="container">
                <div className="row">
                    {tasks.map((el, index) => {
                        return (
                            <Grid
                                key={Math.random() + 20}
                            >
                                <Task
                                    id={el.id}
                                    taskTitle={el.taskTitle}
                                    task={el.task}
                                    date={el.date}
                                    key={index}
                                />
                            </Grid>
                        )
                    })}
                </div>
            </div>
            <Link to={'/create'}>
                <Button
                    type="add-task-btn"
                >
                    <img src={plusIcon} alt="plus-icon"/>
                </Button>
            </Link>
        </div>
    )
};

export default TaskList;