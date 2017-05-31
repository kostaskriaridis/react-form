import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validationRules from './validationRules';

export default function HOC(FieldComponent) {
    return class Field extends Component {
        static defaultProps = {
            onChange() {},
            rules: []
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

            return <FieldComponent {...componentProps} />;
        }

        /**
         * Валидируем поле по правилам. Если не валидно - показываем сообщение.
         * @param {Object} values. Все поля формы со значениями
         * @returns {boolean} Валидно поле или нет
         */
        validate(values) {
            let errorMessage = null;

            this.props.rules.forEach(rule => {
                const { name, value: ruleValue, message } = rule;

                if (typeof validationRules[name] !== 'function') {
                    throw new Error(`Нет такого правила валидации: ${name}`);
                }

                const isValid = validationRules[name](values, this.state.value, ruleValue);

                if (!isValid) {
                    errorMessage = message;
                }
            });

            this.setState({ errorMessage });

            return !errorMessage;
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
