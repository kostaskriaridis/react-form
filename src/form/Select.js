import React from 'react';
import HOC from './HOC';

function Select({ name, value = '', placeholder, options, setValue }) {
    if (placeholder) {
        options = [{ value: '', label: placeholder }].concat(options);
    }

    return (
        <select
            className='form-control'
            name={name}
            value={value}
            onChange={e => setValue(e.target.value)}>
            {options.map((option, index) =>
                <option
                    key={index}
                    value={option.value}>
                    {option.label}
                </option>
            )}
        </select>
    );
}

export default HOC(Select);
