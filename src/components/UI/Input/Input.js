import React from 'react';
import './Input.css';

const Input = props => {
    const inputType = props.type || 'text';
    const cls = ['Input'];
    const htmlFor = `${inputType}-${Math.random()}`;

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                className={!props.valid && props.touched ? "invalid" : "valid"}
                type={inputType}
                name={props.name}
                placeholder={props.placeholder}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                valid={props.valid}
                touched={props.touched}
                onFocus={props.onFocus}
            />

        </div>
    );
};

export default Input;