import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <>
            <h3 className="lds-title">Wait a minute...</h3>
            <div className="lds-spinner">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </>
    )
};

export default Loader;