import React from 'react';
import './Layout.css';
import Navbar from "../../components/Navigation/Navbar/Navbar";

const Layout = props => {
    return (
        <div className="Layout">
            <Navbar/>
            <main>
                {props.children}
            </main>
        </div>
    )
};

export default Layout;

