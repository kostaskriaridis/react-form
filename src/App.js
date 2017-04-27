import React, { Component } from 'react';

import Form from './form/Form';
import Input from './form/Input';
import Select from './form/Select';
import Checkbox from './form/Checkbox';
import Textarea from './form/Textarea';

class App extends Component {
    componentWillMount() {
        this.handleReset = this.handleReset.bind(this);
    }

    render() {
        return (
            <Form
                ref={form => this.form = form}
                onSubmit={data => console.log(data)}>
                <Input
                    name='person.name'
                    placeholder='Имя' />

                <Input
                    name='person.last_name'
                    placeholder='Фамилия' />
                <Input
                    name='person.age'
                    type='number'
                    placeholder='Возраст' />
                <Input
                    name='contact.phone'
                    placeholder='Телефон' />
                <Input
                    name='contact.address'
                    placeholder='Адрес' />
                <Select
                    name='contact.city'
                    fieldType='select'
                    options={[
                        { value: '', label: 'Не выбрано' },
                        { value: 'moscow', label: 'Москва' },
                        { value: 'ekaterinburg', label: 'Екатеринбург' }
                    ]} />
                <Checkbox name='isActive' />
                <Textarea
                    name='comment'
                    placeholder='Оставьте комментарий' />

                <button type='submit'>Отправить</button>
                <button type='button' onClick={this.handleReset}>Очистить</button>
            </Form>
        );
    }

    handleReset() {
        this.form.resetForm();
    }
}

export default App;
