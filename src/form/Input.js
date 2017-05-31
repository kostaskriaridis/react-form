import React from 'react';
import { HOC } from '../module';
import ValidationError from './ValidationError';

function Input({ type, name, placeholder, value = '', disabled, errorMessage, setValue }) {
    return (
        <ValidationError errorMessage={errorMessage}>
            <input
                className='form-control'
                type={type || 'text'}
                name={name}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={e => setValue(e.target.value)} />
        </ValidationError>
    );
}

export default HOC(Input);
