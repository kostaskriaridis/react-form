import React from 'react';
import HOC from './HOC';

function Textarea({ name, value = '', placeholder, setValue }) {
    return (
        <textarea
            className='form-control'
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)} />
    );
}

export default HOC(Textarea);
