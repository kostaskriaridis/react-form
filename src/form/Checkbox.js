import React from 'react';
import HOC from './HOC';

function Checkbox({ name, value = false, setValue }) {
    return (
        <input
            type='checkbox'
            name={name}
            checked={value}
            onChange={(e) => setValue(e.target.checked)} />
    );
}

export default HOC(Checkbox);
