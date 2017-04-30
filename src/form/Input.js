import React from 'react';
import HOC from './HOC';

function Input({ type, name, placeholder, value = '', disabled, errorMessage, setValue }) {
    return (
        <div>
            <input
                className='form-control'
                type={type || 'text'}
                name={name}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onChange={e => setValue(e.target.value)} />
            <div className='error'>{errorMessage}</div>
        </div>
    );
}

export default HOC(Input);
