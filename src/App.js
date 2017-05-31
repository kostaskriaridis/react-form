import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './app.css';

import Header from './header/Header';
import AppContainer from './pages/AppContainer';
import Base from './pages/Base';
import Dynamic from './pages/Dynamic';
import Password from './pages/Password';

function App({ location }) {
    return (
        <Router>
            <AppContainer>
                <Header />
                <Route exact path='/' component={Base} />
                <Route path='/dynamic' component={Dynamic} />
                <Route path='/password' component={Password} />
            </AppContainer>
        </Router>
    );
}

export default App;
