import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';

import Main from '../components/Main';
import Signup from './Signup';
import Login from './Login';

const Admin = () => {
	return (
        <div>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
        </div>
    );
};

export default Admin;