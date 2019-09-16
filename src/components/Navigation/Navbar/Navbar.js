import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import logout from '../../../images/logout.png';
import create from '../../../images/pen.png';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={{pathname: `/`}} className="navbar-brand">Task Manager</Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <Link to={'/create'} className="create-link">
                <label className="create-label">
                    <img src={create} alt="create-icon"/>
                    Create
                </label>
                </Link>
                <label className="logout-label">
                    <img src={logout} alt="logout-icon"/>
                    Log out
                </label>
            </div>
        </nav>
    )
};

export default Navbar;