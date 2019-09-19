import React from 'react';
import './Task.css';
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardFooter
} from "shards-react";
//import star from '../../images/star.png';
import outlineStar from '../../images/outline-star.png';
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import divWithClassName from "react-bootstrap/utils/divWithClassName";


const Task = props => {
    return (
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
                Date: <span>19.09.2019</span>
            </div>
        </div>
    );
};

export default Task;