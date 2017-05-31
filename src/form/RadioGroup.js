import React from 'react';
import { HOC } from '../module';

function RadioGroup({ name, items, value, setValue }) {
    return (
        <div>
            {items.map(item =>
                <div className='radio' key={item.value}>
                    <label>
                        <input
                            type='radio'
                            name={name}
                            checked={item.value === value}
                            onChange={() => setValue(item.value)} />
                        {item.label}
                    </label>
                </div>
            )}
        </div>
    );
}

export default HOC(RadioGroup);
