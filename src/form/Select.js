import React from 'react';
import HOC from './HOC';

function Select({ name, value = '', placeholder, options, errorMessage, disabled, setValue }) {
    if (placeholder) {
        options = [{ value: '', label: placeholder }].concat(options);
    }

    return (
        <div>
            <select
                className='form-control'
                name={name}
                value={value}
                disabled={disabled}
                onChange={e => setValue(e.target.value)}>
                {options.map((option, index) =>
                    <option
                        key={index}
                        value={option.value}>
                        {option.label}
                    </option>
                )}
            </select>
            <div className='error'>{errorMessage}</div>
        </div>
    );
}

export default HOC(Select);
