import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';
import New from './Pages/New';
import Dashboard from './Pages/Dashboard';

export default function Routes(){
    return(
        <BrowserRouter>
            <switch>
                <Route path="/" exact component={Login} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/New" component={New} />
            </switch>
        </BrowserRouter>
    )
}