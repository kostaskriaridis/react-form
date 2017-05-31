import React from 'react';
import { HOC } from '../module';
import ValidationError from './ValidationError';

function Checkbox({ name, value = false, disabled, text, errorMessage, setValue }) {
    return (
        <ValidationError errorMessage={errorMessage}>
            <label>
                <input
                    className='checkbox'
                    type='checkbox'
                    name={name}
                    checked={value}
                    disabled={disabled}
                    onChange={(e) => setValue(e.target.checked)} />
                {text}
            </label>
        </ValidationError>
    );
}

export default HOC(Checkbox);
