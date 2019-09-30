import React from 'react';
import './Task.css';
//import star from '../../images/star.png';
import outlineStar from '../../images/outline-star.png';
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";


const Task = props => {
    return (
        <div className="Task">
            <div className="task-header">
                <span className="task-title">{props.taskTitle}</span>
                <img src={outlineStar} alt="outline-star" className="star-img"/>
                <DropdownMenu
                    id={props.id}
                />
            </div>
            <div className="task-body">
                <span className="card-desc">{props.task}</span>
            </div>
            <div className="task-footer">
                Date: <span>{props.date}</span>
            </div>
        </div>
    );
};

export default Task;