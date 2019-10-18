import React, {useEffect} from 'react';
import Task from "../../components/Task/Task";
import './TaskList.css';
import Grid from "../UI/Grid/Grid";
import Button from "../UI/Button/Button";
import plusIcon from '../../images/plus.png';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const TaskList = () => {
    const {tasks} = useSelector(state => state.task);

    useEffect(() => {
        console.log('Use Effect works!');
        console.log(tasks);
    }, []);

    return (
        <div className="TaskList">
            {
                tasks.length > 0 ?
                    <>
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
                        <Link to={'/create'}>
                            <Button
                                type="add-task-btn"
                            >
                                <img src={plusIcon} alt="plus-icon"/>
                            </Button>
                        </Link>
                    </>
                    :
                    <h3
                        style={{
                            color: '#1d1195',
                            textAlign: 'center',
                            paddingTop: 50
                        }}>
                        You don't have any tasks yet ^-^
                    </h3>
            }
        </div>
    )
};

export default TaskList;