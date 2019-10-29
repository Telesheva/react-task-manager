import React from 'react';
import './Layout.css';
import Navbar from "../../components/Navigation/Navbar/Navbar";
import ErrorBoundary from "../../containers/ErrorBoundary/ErrorBoundary";

const Layout = props => {
    return (
        <div className="Layout">
            <Navbar/>
            <main>
                    <ErrorBoundary>
                        {props.children}
                    </ErrorBoundary>
            </main>
        </div>
    )
};

export default Layout;

