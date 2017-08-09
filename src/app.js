import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'

import FluxTodoApp from "./javascript/fluxtodo/FluxTodoApp";
import RefluxTodoApp from './javascript/refluxtodo/RefluxTodoApp';
import ReduxTodoApp from './javascript/reduxtodo/ReduxTodoApp';

render(
    (<BrowserRouter>
        <div style={{width: 400, margin: '100px auto'}}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/redux">Redux</Link></li>
                <li><Link to="/flux">Flux</Link></li>
                <li><Link to="/reflux">Reflux</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={FluxTodoApp} />
            <Route path="/redux" component={ReduxTodoApp} />
            <Route path="/flux" component={FluxTodoApp} />
            <Route path="/reflux" component={RefluxTodoApp} />
        </div>
    </BrowserRouter>),
    document.getElementById('content')
);
