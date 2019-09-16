import React from 'react';
import Task from "../../components/Task/Task";
import './TaskList.css';
import Grid from "../UI/Grid/Grid";
import Button from "../UI/Button/Button";
import plusIcon from '../../images/plus.png';
import {Link} from "react-router-dom";

const TaskList = props => {
        return (
            <div>
                <div className="container">
                    <div className="row">
                    {[1,2,3,4,5,6,7,8,9,10].map((el, index)=>{
                        return(
                            <Grid
                            key={index + 20}
                            >
                                <Task
                                task="Be happy!"
                                el={el}
                                index={index}
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