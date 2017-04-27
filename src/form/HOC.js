import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function HOC(InputComponent) {
    class Input extends Component {
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
                setValue: this.setValue,
                value: this.state.value,
                ...this.props
            };

            return <InputComponent {...componentProps} />;
        }

        setValue(value) {
            this.setState({ value });
        }

        resetValue() {
            this.setValue(undefined);
        }

        getValue() {
            return this.state.value;
        }
    }

    Input.contextTypes = {
        form: PropTypes.object
    };

    return Input;
}
