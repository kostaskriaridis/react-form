import React, { Component } from 'react';

import Form, { addValidationRule } from '../module';
import Input from '../form/Input';

// Добавляем кастомное правило
addValidationRule('equalsField', (values, value, fieldName) => {
    return value === values[fieldName];
});

export default class Password extends Component {
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label>Email</label>
                    <Input
                        name='email'
                        placeholder='Введите email'
                        rules={[
                            {
                                name: 'isNotEmpty',
                                value: true,
                                message: 'Введите email'
                            },
                            {
                                name: 'isEmail',
                                value: true,
                                message: 'Введите корректный email'
                            }
                        ]} />
                </div>
                <div className='form-group'>
                    <label>Пароль</label>
                    <Input
                        type='password'
                        name='password'
                        placeholder='Введите пароль'
                        rules={[
                            {
                                name: 'isNotEmpty',
                                value: true,
                                message: 'Введите пароль'
                            }
                        ]} />
                </div>
                <div className='form-group'>
                    <label>Повторите пароль</label>
                    <Input
                        type='password'
                        name='password_repeat'
                        placeholder='Повторите пароль'
                        rules={[
                            {
                                name: 'isNotEmpty',
                                value: true,
                                message: 'Введите подтверждение пароль'
                            },
                            {
                                name: 'equalsField',
                                value: 'password',
                                message: 'Повтор должен совпадать'
                            }
                        ]} />
                </div>
                <button type='submit' className='btn btn-primary'>Зарегистрироваться</button>
            </Form>
        );
    }

    handleSubmit(data) {
        console.log(data);
    }
}
