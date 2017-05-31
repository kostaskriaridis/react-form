import React from 'react';
import { HOC } from '../module';
import ValidationError from './ValidationError';

function RadioGroup({ name, items, value, disabled, errorMessage, setValue }) {
    return (
        <ValidationError errorMessage={errorMessage}>
            {items.map(item =>
                <div className='radio' key={item.value}>
                    <label>
                        <input
                            type='radio'
                            name={name}
                            checked={item.value === value}
                            disabled={disabled}
                            onChange={() => setValue(item.value)} />
                        {item.label}
                    </label>
                </div>
            )}
        </ValidationError>
    );
}

export default HOC(RadioGroup);
