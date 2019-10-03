import React, {useContext} from 'react';
import './DropdownMenu.css';
import more from '../../../images/more.png';
import {Dropdown} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {deleteTask} from "../../../store/actions/task";
import {Context} from "../../../context";

const DropdownMenu = () => {
        const dispatch = useDispatch();
        const {id} = useContext(Context);
    return (
        <Dropdown>
            <Dropdown.Toggle
                id="dropdown-custom-2"
                as="div"
            >
                <div className="more-dropdown"><img src={more} alt="more-btn" className="more-img"/></div>
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
                        className="dropdown-link-item"
                        onClick={() => {
                                dispatch(deleteTask(id));
                                console.log(id);
                        }}
                    >
                            <span className="dropdown-link">
                            Delete task
                            </span>
                    </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
    )
};

export default DropdownMenu;
