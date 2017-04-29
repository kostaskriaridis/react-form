import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

const nav = [{
    to: '/',
    text: 'Обычная форма'
}, {
    to: '/dynamic',
    text: 'Динамическая форма'
}];

function Header({ location }) {
    return (
        <header className='header'>
            <h1>React Form</h1>
            <ul className='nav nav-pills'>
                {nav.map(link =>
                    <li key={link.to} className={location.pathname === link.to ? 'active' : ''}>
                        <NavLink to={link.to}>
                            {link.text}
                        </NavLink>
                    </li>
                )}
            </ul>
        </header>
    );
}

export default withRouter(Header);
