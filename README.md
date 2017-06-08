# React Form

Inspired by `formsy-react`

#### Examples
The examples contain basic form usage, and form, where fields can by created/removed dynamicaly

To run the examples run the following commands:
```
$ npm install
$ npm start
```

#### Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import HOC from './HOC';

function Input({ type, name, value = '', setValue }) {
    return (
        <input
            type={type || 'text'}
            name={name}
            value={value}
            onChange={e => setValue(e.target.value)} />
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
    }
}
```

Thats it
