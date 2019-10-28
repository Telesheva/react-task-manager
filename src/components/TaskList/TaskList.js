import React, {useEffect} from 'react';
import Task from "../../components/Task/Task";
import './TaskList.css';
import Grid from "../UI/Grid/Grid";
import Button from "../UI/Button/Button";
import plusIcon from '../../images/plus.png';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createSelector} from 'reselect';
import {fetchTasks} from "../../store/actions/task";
import Loader from "../UI/Loader/Loader";

const TaskList = () => {
    const dispatch = useDispatch();
    const {tasks, loading, error} = useSelector(state => state.task);
    if (error) {
        throw new Error(error);
    }

    const qsort = arr => {
        if (arr.length < 2) {
            return arr;
        } else {
            const pivot = arr[Math.floor(Math.random() * arr.length)];
            const less = arr.filter(value => value < pivot);
            const greater = arr.filter(value => value > pivot);
            return [...qsort(greater), pivot, ...qsort(less)];
        }
    };

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const sortTasks = createSelector(
        [fetchTasks],
        () => {
            const dateArray = [];
            tasks.map(task => {
                dateArray.push(task.date);
                return dateArray;
            });
            return qsort(dateArray);
        }
    );
    const sortedDate = sortTasks(tasks);
    let sortedTasks = [];
    const favorites = [];
    sortedDate.forEach(date => {
        tasks.map(task => {
            if (task.date === date && !task.isFavorite) {
                return sortedTasks.push(task);
            } else if (task.date === date && task.isFavorite) {
                return favorites.push(task);
            }
        });
    });
    sortedTasks = [...favorites, ...sortedTasks];

    return (
        <div className="TaskList">
            {
                !loading ?
                    <>
                        <div className="container">
                            <div className="row">
                                {sortedTasks.map((el, index) => {
                                    return (
                                        <Grid
                                            key={Math.random() + 20}
                                        >
                                            <Task
                                                id={el.id}
                                                taskTitle={el.taskTitle}
                                                task={el.taskBody}
                                                date={el.date}
                                                isFavorite={el.isFavorite}
                                                key={index}
                                            />
                                        </Grid>
                                    )
                                })}
                            </div>
                        </div>
                        < Link to={'/create'}>
                            < Button
                                type="add-task-btn"
                            >
                                <img src={plusIcon} alt="plus-icon"/>
                            </Button>
                        </Link>
                    </>
                    :
                    <>
                        <Loader/>
                        {tasks.length === 0 && !loading ?
                            <h3
                                style={{
                                    color: '#1d1195',
                                    textAlign: 'center',
                                    paddingTop: 50
                                }}>
                                You don't have any tasks yet ^-^
                            </h3> : null}
                    </>
            }
        </div>
    )
};

export default TaskList;