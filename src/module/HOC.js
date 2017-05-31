import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function HOC(FieldComponent) {
    return class Field extends Component {
        static defaultProps = {
            onChange() {}
        };

        static contextTypes = {
            form: PropTypes.object
        };

        constructor(props) {
            super(props);

            this.setValue = this.setValue.bind(this);
            this.getValue = this.getValue.bind(this);

            this.state = {
                value: this.props.value
            };
        }

        componentDidMount() {
            this.context.form.attachField(this);
        }

        componentDidUpdate(prevProps) {
            if (this.props.value !== prevProps.value) {
                this.setValue(this.props.value);
            }
        }

        componentWillUnmount() {
            this.context.form.detachField(this);
        }

        render() {
            const componentProps = {
                ...this.props,
                setValue: this.setValue,
                value: this.state.value
            };

            return <FieldComponent {...componentProps} />;
        }

        setValue(value) {
            this.props.onChange(value);
            this.setState({ value });
        }

        resetValue() {
            this.setValue(this.props.value);
        }

        getValue() {
            return this.state.value;
        }
    }
}
