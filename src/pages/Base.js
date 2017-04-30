import React, { Component } from 'react';

import Form from '../form/Form';
import Input from '../form/Input';
import Select from '../form/Select';
import Checkbox from '../form/Checkbox';
import Textarea from '../form/Textarea';
import RadioGroup from '../form/RadioGroup';

class Base extends Component {
    state = {
        isLoading: false
    };

    componentWillMount() {
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        this.setState({ isLoading: true });

        setTimeout(() => {
            console.log(data);
            this.setState({ isLoading: false });
        }, 1000);
    }

    render() {
        const { isLoading } = this.state;

        return (
            <Form
                ref={form => this.form = form}
                onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label>Имя</label>
                    <Input
                        name='person.name'
                        placeholder='Введите имя'
                        disabled={isLoading}
                        validations={{
                            isNotEmpty: true,
                            minLength: 2,
                            maxLength: 20
                        }}
                        validationMessages={{
                            isNotEmpty: 'Поле не должно быть пустым',
                            minLength: 'Поле должно содержать минимум 2 символов',
                            maxLength: 'Поле должно содержать максимум 20 символов'
                        }} />
                </div>
                <div className='form-group'>
                    <label>Фамилия</label>
                    <Input
                        name='person.last_name'
                        placeholder='Введите фамилию'
                        disabled={isLoading} />
                </div>
                <div className='form-group'>
                    <label>Возраст</label>
                    <Input
                        name='person.age'
                        type='number'
                        placeholder='Введите возраст'
                        disabled={isLoading} />
                </div>
                <div className='form-group'>
                    <label>Телефон</label>
                    <Input
                        name='contact.phone'
                        placeholder='Введите телефон'
                        disabled={isLoading} />
                </div>
                <div className='form-group'>
                    <label>Город</label>
                    <Select
                        name='contact.city'
                        placeholder='Выберите город'
                        disabled={isLoading}
                        options={[
                            { value: 'moscow', label: 'Москва' },
                            { value: 'saint-petersburg', label: 'Санкт-Петербург' },
                            { value: 'ekaterinburg', label: 'Екатеринбург' }
                        ]}
                        validations={{
                            isNotEmpty: true
                        }}
                        validationMessages={{
                            isNotEmpty: 'Выберите город'
                        }} />
                </div>
                <div className='form-group'>
                    <label>Предпочтения в еде</label>
                    <RadioGroup
                        name='food'
                        disabled={isLoading}
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
                        placeholder='Введите адрес'
                        disabled={isLoading} />
                </div>
                <div className='checkbox'>
                    <label>
                        <Checkbox
                            name='matchesWithActual'
                            value={false}
                            disabled={isLoading} />
                        Совпадает с фактическим
                    </label>
                </div>
                <div className='form-group'>
                    <label>Комментарий</label>
                    <Textarea
                        name='comment'
                        placeholder='Введите комментарий'
                        disabled={isLoading} />
                </div>

                <button className='btn btn-primary' disabled={isLoading} type='submit'>Сохранить</button>
                <button className='btn btn-default' disabled={isLoading} type='button' onClick={this.handleReset}>Очистить</button>
            </Form>
        );
    }

    handleReset() {
        this.form.resetForm();
    }
}

export default Base;
