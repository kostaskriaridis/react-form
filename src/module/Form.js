import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { flatten } from './utils';

export default class Form extends Component {
    static childContextTypes = {
        form: PropTypes.object
    };

    componentWillMount() {
        this.inputs = [];

        this.handleSubmit = this.handleSubmit.bind(this);
        this.detachField = this.detachField.bind(this);
        this.attachField = this.attachField.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    getChildContext() {
        return {
            form: {
                attachField: this.attachField,
                detachField: this.detachField
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        const { errors } = nextProps;

        if (errors !== this.props.errors) {
            this.receiveExternalErrors(errors);
        }
    }

    render() {
        return <form onSubmit={this.handleSubmit}>{this.props.children}</form>;
    }

    handleSubmit(e) {
        e.preventDefault();

        const isFormValid = this.validateForm(this.getFlatModel());

        if (isFormValid) {
            this.props.onSubmit(this.getModel());
        }
    }

    /**
     * Валидируем форму
     * @returns {boolean} Валидна форма или нет
     */
    validateForm(model) {
        let isFormValid = true;

        this.inputs.forEach(input => {
            /**
             * Передаем в инпут объект со значениями для перекрестной валидации полей.
             * Валидность одного поля может зависеть от другого
             */
            const isInputValid = input.validate(model);

            if (isFormValid && !isInputValid) {
                isFormValid = isInputValid;
            }
        });

        return isFormValid;
    }

    /**
     * Получаем объект плоского типа:
     * {
     *     'user.name': 'Smike',
     *     'user.age': '24'
     * }
     * @returns {Object}
     */
    getFlatModel() {
        return this.inputs.reduce((model, input) => {
            const value = input.getValue();
            const name = input.props.name;

            model[name] = value;

            return model;
        }, {});
    }

    /**
     * Получаем объект древовидного типа:
     * {
     *     user: {
     *         name: 'Smike',
     *         age: '24'
     *     }
     * }
     * @returns {Object}
     */
    getModel() {
        return this.inputs.reduce((model, input) => {
            const value = input.getValue();
            const name = input.props.name;
            // Конвертим квадратные скобки в точки
            const keys = name.replace(/\[(\w+)\]/g, '.$1').split('.');

            let base = model;

            while (keys.length) {
                const key = keys.shift();

                if (keys.length) {
                    // Если следующий ключ - число, значит мы должны изпользовать массив
                    base = base[key] = base[key] || (isNaN(keys[0]) ? {} : []);
                } else {
                    base = base[key] = value;
                }
            }

            return model;
        }, {});
    }

    /**
     * Удаляем компонент
     * @param {Object} instanceof ReactComponent
     */
    detachField(field) {
        this.inputs = this.inputs.filter(input => input !== field);
    }

    /**
     * Добавляем компонент
     * @param {Object} instanceof ReactComponent
     */
    attachField(field) {
        this.inputs.push(field);
    }

    resetForm() {
        this.inputs.forEach(input => input.resetValue());
    }

    receiveExternalErrors(errors) {
        const flattenErrors = flatten(errors);

        this.inputs.forEach(input => {
            const externalError = flattenErrors[input.props.name];

            if (externalError) {
                input.setExternalError(externalError);
            }
        });
    }
}
