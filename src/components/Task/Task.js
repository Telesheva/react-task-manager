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
import more from "../.././images/more.png";
import {Dropdown} from "react-bootstrap";

const Task = props => {
    return (
        <Card style={{maxWidth: "300px"}}>
            <CardHeader>
                <span>Task:</span>
                <img src={outlineStar} alt="outline-star"/>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-custom-2"
                    as="div">
                    <div className="more-dropdown"><img src={more} alt="more-btn"/></div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item
                            href={'/edit'}
                            className="dropdown-link-item"
                        >
                            <span className="dropdown-link">
                            Edit task
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item
                            href={'/'}
                            className="dropdown-link-item"
                        >
                            <span className="dropdown-link">
                            Delete task
                            </span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </CardHeader>
            <CardBody>
                <CardTitle>
                    Task {props.index + 1}
                </CardTitle>
                <p>{props.task}</p>
            </CardBody>
            <CardFooter>
                Card footer
            </CardFooter>
        </Card>
    );
};

export default Task;