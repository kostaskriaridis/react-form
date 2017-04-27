import React from 'react';
import HOC from './HOC';

function Input({ type, name, placeholder, value = '', setValue }) {
    return (
        <input
            type={type || 'text'}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)} />
    );
}

export default HOC(Input);
