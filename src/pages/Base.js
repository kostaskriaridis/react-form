import React, { Component } from 'react';

import Form from '../module';

import Input from '../form/Input';
import Select from '../form/Select';
import Checkbox from '../form/Checkbox';
import Textarea from '../form/Textarea';
import RadioGroup from '../form/RadioGroup';

class Base extends Component {
    componentWillMount() {
        this.handleReset = this.handleReset.bind(this);
    }

    render() {
        return (
            <Form
                ref={form => this.form = form}
                onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label>Имя</label>
                    <Input
                        name='person.name'
                        placeholder='Введите имя'
                        rules={[
                            {
                                name: 'isNotEmpty',
                                value: true,
                                message: 'Поле не должно быть пустым'
                            },
                            {
                                name: 'minLength',
                                value: 2,
                                message: 'Поле должно содержать минимум 2 символов'
                            },
                            {
                                name: 'maxLength',
                                value: 20,
                                message: 'Поле должно содержать максимум 20 символов'
                            }
                        ]} />
                </div>
                <div className='form-group'>
                    <label>Возраст</label>
                    <Input
                        name='person.age'
                        type='number'
                        placeholder='Введите возраст' />
                </div>
                <div className='form-group'>
                    <label>Хобби</label>
                    <Select
                        name='person.hobby'
                        options={[
                            { value: 'ski', label: 'Лыжи' },
                            { value: 'surf', label: 'Серфинг' },
                            { value: 'drive', label: 'Вождение' }
                        ]}
                        multiple />
                </div>
                <div className='form-group'>
                    <label>Телефон</label>
                    <Input
                        name='contact.phone'
                        placeholder='Введите телефон' />
                </div>
                <div className='form-group'>
                    <label>Город</label>
                    <Select
                        name='contact.city'
                        placeholder='Выберите город'
                        options={[
                            { value: 'moscow', label: 'Москва' },
                            { value: 'saint-petersburg', label: 'Санкт-Петербург' },
                            { value: 'ekaterinburg', label: 'Екатеринбург' }
                        ]}
                        rules={[
                            {
                                name: 'isNotEmpty',
                                value: true,
                                message: 'Выберите город'
                            }
                        ]} />
                </div>
                <div className='form-group'>
                    <label>Предпочтения в еде</label>
                    <RadioGroup
                        name='food'
                        items={[
                            { value: 'donut', label: 'Пончики' },
                            { value: 'pizza', label: 'Пицца' },
                            { value: 'past', label: 'Паста' }
                        ]} />
                </div>
                <div className='form-group'>
                    <label>Адрес</label>
                    <Input
                        name='contact.address'
                        placeholder='Введите адрес' />
                </div>
                <div className='checkbox'>
                    <Checkbox
                        name='matchesWithActual'
                        text='Совпадает с фактическим'
                        value={false} />
                </div>
                {[1, 2].map((item, index) =>
                    <div className='form-group' key={index}>
                        <label>Умение {index + 1}</label>
                        <Input
                            name={`skills[${index}]`}
                            placeholder={`Введите скилл ${index + 1}`} />
                    </div>
                )}
                <div className='form-group'>
                    <label>Комментарий</label>
                    <Textarea
                        name='comment'
                        placeholder='Введите комментарий' />
                </div>
                <button className='btn btn-primary' type='submit'>Сохранить</button>
                <button className='btn btn-default' type='button' onClick={this.handleReset}>Очистить</button>
            </Form>
        );
    }

    handleSubmit(data) {
        console.log(data);
    }

    handleReset() {
        this.form.resetForm();
    }
}

export default Base;
