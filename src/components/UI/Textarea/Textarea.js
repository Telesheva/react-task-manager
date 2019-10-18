import React from 'react';
import './Textarea.css';

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched;
}

const Textarea = props => {
    const cls = ['Textarea'];

    if (isInvalid(props)) {
        cls.push('invalid');
    }

    return (
        <>
            <textarea
                className={cls.join(' ')}
                rows={2}
                cols={50}
                maxLength={70}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid(props)
                    ? <span>{props.errorMessage || 'Enter the proper value'}</span>
                    : null
            }

        </>
    )
};

export default Textarea;