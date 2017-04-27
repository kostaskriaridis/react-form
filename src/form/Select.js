import React from 'react';
import HOC from './HOC';

function Select({ name, value = '', options, setValue }) {
    return (
        <select
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
