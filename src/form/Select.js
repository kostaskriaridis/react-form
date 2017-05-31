import React, { Component } from 'react';
import { HOC } from '../module';

class Select extends Component {
    componentWillMount() {
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const { name, multiple, value = multiple ? [] : '' } = this.props;

        return (
            <select
                className='form-control'
                name={name}
                value={value}
                multiple={multiple}
                onChange={this.handleChange}>
                {this.getOptions().map((option, index) =>
                    <option
                        key={index}
                        value={option.value}>
                        {option.label}
                    </option>
                )}
            </select>
        );
    }

    handleChange(event) {
        const { multiple, setValue } = this.props;
        const selectNode = event.target;

        if (multiple) {
            const multivalue = Array.from(selectNode.childNodes).reduce((result, option) => {
                if (option.selected && option.value) {
                    result.push(option.value);
                }

                return result;
            }, []);

            setValue(multivalue);
        } else {
            setValue(selectNode.value);
        }
    }

    getOptions() {
        const { placeholder, multiple, options } = this.props;

        if (placeholder && !multiple) {
            return [{ value: '', label: placeholder }, ...options ];
        } else {
            return options;
        }
    }
}

export default HOC(Select);
