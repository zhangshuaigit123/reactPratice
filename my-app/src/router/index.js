import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Index from '../pages/index'
import List from '../pages/List'
import Nesting from '../pages/Nesting'
function AppRouter() {
    return (
        <Router>
            <Route path='/' exact component={Index}></Route>
            <Route path='/list'  component={List}></Route>
            <Route path='/Nesting'  component={Nesting}></Route>
            
        </Router>
    )
}
export default AppRouter;