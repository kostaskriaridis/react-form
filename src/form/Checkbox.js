import React from 'react';
import HOC from './HOC';

function Checkbox({ name, value = false, setValue }) {
    return (
        <input
            className='checkbox'
            type='checkbox'
            name={name}
            checked={value}
            onChange={(e) => setValue(e.target.checked)} />
    );
}

export default HOC(Checkbox);
