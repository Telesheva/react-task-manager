import React from 'react';
import './DropdownMenu.css';
import more from '../../../images/more.png';
import {Dropdown} from "react-bootstrap";

const DropdownMenu = () => {
    return (
    <Dropdown>
        <Dropdown.Toggle id="dropdown-custom-2"
                         as="div">
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
                href={'/'}
                className="dropdown-link-item"
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
