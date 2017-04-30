import React from 'react';
import HOC from './HOC';

function Checkbox({ name, value = false, disabled, setValue }) {
    return (
        <input
            className='checkbox'
            type='checkbox'
            name={name}
            checked={value}
            disabled={disabled}
            onChange={(e) => setValue(e.target.checked)} />
    );
}

export default HOC(Checkbox);
