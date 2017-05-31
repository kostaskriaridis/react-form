# React Form

Inspired by `formsy-react`

#### Examples
The examples contain basic form usage, and form, where fields can by created/removed dynamicaly

#### Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Form, { HOC } from './module';

function Input({ type, name, value = '', errorMessage, setValue }) {
    return (
        <div>
            <input
                type={type || 'text'}
                name={name}
                value={value}
                onChange={e => setValue(e.target.value)} />
            <div className='error'>{errorMessage}</div>
        </div>
    );
}

const FormInput = HOC(Input);

export default function App() {
    return (
        <Form onSubmit={data => console.log(data)}>
            <FormInput name='user.name' />
            <FormInput name='user.gender' />
            <FormInput name='user.age' />
            <FormInput name='address.city' />
            <FormInput name='address.house' />
            <FormInput name='skills[0]' />
            <FormInput name='skills[1]' />
            <button type='submit'>Save</button>
        </Form>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

```

When the form is submitted you will get output scheme in the console:

```javascript
{
    user: {
        name: '...',
        gender: '...',
        age: '...'
    },
    address: {
        city: '...',
        house: '...'
    },
    skills: [
        '...',
        '...'
    ]
}
```

#### Validation
You can specify a validation for concrete field.
If validation rule fails, `HOC` component will pass an `errorMessage` prop to field component,
and you can display the message, specified in `rule` object

```javascript
<FormInput
    name='email'
    rules={[
        {
            name: 'isNotEmpty',
            message: 'Please, enter email'
        },
        {
            name: 'isEmail',
            message: 'Please, enter a correct email address'
        }
    ]} />

<FormInput
    name='name'
    rules={[
        {
            name: 'minLength',
            value: 2,
            message: 'Min value length should be 2'
        },
        {
            name: 'maxLength',
            value: 20,
            message: 'Max value length should be 20'
        },
    ]} />
```

#### Rules
The value for validation rule should be passed via `value` property

##### Default validation rules
| Rule name     | Description                                  |
| ------------- | -------------------------------------------  |
| `isNotEmpty`  | Compares field value with an empty string    |
| `maxLength`   | Compares field value with maxLength          |
| `minLength`   | Compares field value with minLength          |
| `matchRegexp` | Checks field value with regexp pattern       |
| `isEmail`     | Checks field value with email regexp pattern |

You can specify your custom validation rule via `addValidationRule` function

```javascript
import { addValidationRule } from './module';

addValidationRule('equalsField', (values, value, fieldName) => {
    return value === values[fieldName];
});

<FormInput name='password' />
<FormInput
    name='password_repeat'
    rules={[
        {
            name: 'equalsField'
            value: 'password',
            message: 'Password repeat should be the same as `password`'
        }
    ]} />
```

Thats it
