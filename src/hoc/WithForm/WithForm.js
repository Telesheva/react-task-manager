import React from 'react';
import './WithForm.css';

const WithForm = props => {
    return (
        <div className="task-form">
            <form className="form-creator">
                {props.children}
            </form>
        </div>
    )
};

export default WithForm;