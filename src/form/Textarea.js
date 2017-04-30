import React from 'react';
import HOC from './HOC';

function Textarea({ name, value = '', placeholder, disabled, setValue }) {
    return (
        <textarea
            className='form-control'
            name={name}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={e => setValue(e.target.value)} />
    );
}

export default HOC(Textarea);
