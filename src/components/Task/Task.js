import React from 'react';
import './Task.css';
import star from '../../images/star.png';
import outlineStar from '../../images/outline-star.png';
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import {Context} from "../../context";
import {useDispatch} from "react-redux";
import {toggleFavorites} from "../../store/actions/task";


const Task = props => {
    const dispatch = useDispatch();
    return (
        <Context.Provider value={{
            id: props.id,
            isFavorite: props.isFavorite
        }}>
            <div className="Task">
                <div className="task-header">
                    <span className="task-title">{props.taskTitle}</span>
                    {props.isFavorite ?
                        <img
                            src={star}
                            alt="star"
                            className="star-img"
                            onClick={() => dispatch(toggleFavorites(props.id, false))}
                        />
                        :
                        <img
                            src={outlineStar}
                            alt="outline-star"
                            className="star-img"
                            onClick={() => dispatch(toggleFavorites(props.id, true))}
                        />
                    }
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