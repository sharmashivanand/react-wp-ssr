import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';

export default () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/hi' component={() => <div>Hi</div>} />
        </div>
    );
}