import React from 'react';
import './Task.css';
import star from '../../images/star.png';
import outlineStar from '../../images/outline-star.png';
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import {Context} from "../../context";
import {useDispatch} from "react-redux";
import {toggleFavorites} from "../../store/actions/task";
import moment from "moment";


const Task = props => {
    const dispatch = useDispatch();
    const TaskHeader = () => (
        <div className="task-header">
            <span className="task-title">{props.taskTitle}</span>
                <img
                    src={props.isFavorite ? star : outlineStar}
                    alt="star"
                    className="star-img"
                    onClick={() => dispatch(toggleFavorites(props.id, !props.isFavorite))}
                />
            <DropdownMenu/>
        </div>
    );

    return (
        <Context.Provider value={{
            id: props.id,
            isFavorite: props.isFavorite
        }}>
            <div className="Task">
                <TaskHeader/>
                <div className="task-body">
                    <span className="card-desc">{props.task}</span>
                </div>
                <div className="task-footer">
                    Date: <span>{moment(props.date).format('ll')}</span>
                </div>
            </div>
        </Context.Provider>
    );
};

export default Task;