import React, { Component } from 'react';

import Form from '../form/Form';
import Input from '../form/Input';
import Select from '../form/Select';
import Checkbox from '../form/Checkbox';
import Textarea from '../form/Textarea';

export default class Dynamic extends Component {
    state = {
        fields: [
            { type: 'input', name: 'person.first_name', label: 'Имя' },
            { type: 'input', name: 'person.age', label: 'Возраст' },
            {
                type: 'select',
                name: 'address.city',
                label: 'Город',
                value: 'moscow',
                options: [
                    { label: 'Москва', value: 'moscow' },
                    { label: 'Санкт-Петербург', value: 'saint-petersburg' },
                    { label: 'Екатеринбург', value: 'ekaterinburg' }
                ]
            },
            { type: 'input', name: 'address.street', label: 'Улица' },
            { type: 'input', name: 'address.house', label: 'Дом' },
            { type: 'checkbox', name: 'address.isActive', label: 'Активен?' },
            { type: 'textarea', name: 'comment', label: 'Комментарий' },
        ]
    };

    componentWillMount() {
        this.handleCreateField = this.handleCreateField.bind(this);
    }

    render() {
        return (
            <div>
                <CreateForm onCreateField={this.handleCreateField} />
                <hr />
                <Form onSubmit={data => console.log(data)}>
                    {this.state.fields.map(field => this.renderFieldWrapper(field))}
                    <button className='btn btn-primary' type='submit'>Сохранить</button>
                </Form>
            </div>
        );
    }

    renderFieldWrapper(field) {
        return (
            <div key={field.name} className='form-group'>
                <div
                    className='form-group__remove btn btn-danger btn-xs'
                    onClick={this.removeField.bind(this, field.name)}>
                    x
                </div>
                <label>
                    {field.label}
                </label>
                {this.renderField(field)}
            </div>
        );
    }

    renderField(field) {
        const { type, ...rest } = field;

        switch (type) {
            case 'select':
                return <Select {...rest} />;

            case 'textarea':
                return <Textarea {...rest} />;

            case 'checkbox':
                return <Checkbox {...rest} />;

            default:
                return <Input {...rest} />;
        }
    }
    
    handleCreateField(field) {
        this.setState({
            fields: this.state.fields.concat(field)
        });
    }

    removeField(fieldName) {
        this.setState({
            fields: this.state.fields.filter(field => field.name !== fieldName)
        });
    }
}

function CreateForm({ onCreateField }) {
    let form;

    function handleCreateField(data) {
        if (!Object.keys(data).every(name => data[name])) {
            return;
        }

        form.resetForm();
        onCreateField(data);
    }

    return (
        <Form ref={node => form = node} onSubmit={handleCreateField}>
            <h3>Добавить поле</h3>
            <div className='form-group'>
                <Select
                    name='type'
                    value='input'
                    options={[{
                        label: 'Input',
                        value: 'input'
                    }, {
                        label: 'Textarea',
                        value: 'textarea'
                    }, {
                        label: 'Checkbox',
                        value: 'checkbox'
                    }]} />
            </div>
            <div className='form-group'>
                <Input
                    name='label'
                    placeholder='Label' />
            </div>
            <div className='form-group'>
                <Input
                    name='name'
                    placeholder='Name' />
            </div>
            <button className='btn btn-primary' type='submit'>Добавить</button>
        </Form>
    );
}
