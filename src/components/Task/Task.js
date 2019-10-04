import React from 'react';
import './Task.css';
//import star from '../../images/star.png';
import outlineStar from '../../images/outline-star.png';
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import {Context} from "../../context";


const Task = props => {
    return (
        <Context.Provider value={{
            id: props.id,
            title: props.taskTitle,
            task: props.task
        }}>
        <div className="Task">
            <div className="task-header">
                <span className="task-title">{props.taskTitle}</span>
                <img src={outlineStar} alt="outline-star" className="star-img"/>
                <DropdownMenu/>
            </div>
            <div className="task-body">
                <span className="card-desc">{props.task}</span>
            </div>
            <div className="task-footer">
                Date: <span>{props.date}</span>
            </div>
        </div>
        </Context.Provider>
    );
};

export default Task;