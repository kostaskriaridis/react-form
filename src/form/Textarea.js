import React from 'react';
import { HOC } from '../module';
import ValidationError from './ValidationError';

function Textarea({ name, value = '', placeholder, disabled, errorMessage, setValue }) {
    return (
        <ValidationError errorMessage={errorMessage}>
            <textarea
                className='form-control'
                name={name}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={e => setValue(e.target.value)} />
        </ValidationError>
    );
}

export default HOC(Textarea);
