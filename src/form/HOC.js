import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validationRules from '../utils/validations';

export default function HOC(InputComponent) {
    return class Input extends Component {
        static defaultProps = {
            onChange() {},
            validationMessages: {}
        };

        static contextTypes = {
            form: PropTypes.object
        };

        constructor(props) {
            super(props);

            this.setValue = this.setValue.bind(this);
            this.getValue = this.getValue.bind(this);

            this.state = {
                value: this.props.value,
                errorMessage: null
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
                value: this.state.value,
                errorMessage: this.state.errorMessage
            };

            return <InputComponent {...componentProps} />;
        }

        validate() {
            const { validations, validationMessages } = this.props;
            let errorMessage = null;

            for (const key in validations) {
                if (validations.hasOwnProperty(key)) {
                    const isValid = validationRules[key](this.state.value, validations[key]);

                    if (!isValid) {
                        errorMessage = validationMessages[key];
                    }
                }
            }

            if (errorMessage) {
                this.setState({ errorMessage });
                return false;
            } else if (this.state.errorMessage) {
                this.setState({ errorMessage: null });
            }

            return true;
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
