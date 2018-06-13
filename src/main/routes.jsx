import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import CadUsuarios from '../cadastros/cadUsuarios'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/cadastros' component={CadUsuarios} />
        <Redirect from='*' to='/' />
    </Router>
)