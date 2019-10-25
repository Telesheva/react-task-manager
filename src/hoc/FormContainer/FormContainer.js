import React from 'react';
import './FormContainer.css';

const FormContainer = props => {
    return (
        <div className="task-form">
            <form className="form-creator" onSubmit={props.onFormSubmit}>
                {props.children}
            </form>
        </div>
    )
};

export default FormContainer;