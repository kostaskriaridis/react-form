import React, { Component } from 'react';

import Form from '../form/Form';
import Input from '../form/Input';
import Select from '../form/Select';
import Checkbox from '../form/Checkbox';
import Textarea from '../form/Textarea';

class Base extends Component {
    componentWillMount() {
        this.handleReset = this.handleReset.bind(this);
    }

    render() {
        return (
            <Form
                ref={form => this.form = form}
                onSubmit={data => console.log(data)}>
                <div className='form-group'>
                    <label>Имя</label>
                    <Input name='person.name' />
                </div>
                <div className='form-group'>
                    <label>Фамилия</label>
                    <Input name='person.last_name' />
                </div>
                <div className='form-group'>
                    <label>Возраст</label>
                    <Input
                        name='person.age'
                        type='number' />
                </div>
                <div className='form-group'>
                    <label>Телефон</label>
                    <Input name='contact.phone' />
                </div>
                <div className='form-group'>
                    <label>Город</label>
                    <Select
                        name='contact.city'
                        value='moscow'
                        options={[
                            { value: 'moscow', label: 'Москва' },
                            { value: 'saint-petersburg', label: 'Санкт-Петербург' },
                            { value: 'ekaterinburg', label: 'Екатеринбург' }
                        ]} />
                </div>
                <div className='form-group'>
                    <label>Адрес</label>
                    <Input name='contact.address' />
                </div>
                <div className='checkbox'>
                    <label>
                        <Checkbox
                            name='isActive'
                            value={false} />
                        Активен
                    </label>
                </div>
                <div className='form-group'>
                    <label>Комментарий</label>
                    <Textarea name='comment' />
                </div>

                <button className='btn btn-primary' type='submit'>Сохранить</button>
                <button className='btn btn-default' type='button' onClick={this.handleReset}>Очистить</button>
            </Form>
        );
    }

    handleReset() {
        this.form.resetForm();
    }
}

export default Base;
