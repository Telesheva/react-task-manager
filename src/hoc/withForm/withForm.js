import React from 'react';
import './withForm.css';

const withForm = props => {
    return (
        <div className="task-form">
            <form className="form-creator">
                {props.children}
            </form>
        </div>
    )
};

export default withForm;