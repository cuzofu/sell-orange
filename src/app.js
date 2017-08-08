import React from 'react';
import ReactDOM from 'react-dom';
import Index from './javascript/reduxtodo/index'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './javascript/reduxtodo/reducers/reducer';
import TodoContainer from "./javascript/fluxtodo/containers/TodoContainer";
import * as TodoActions from "./javascript/reduxtodo/actions/action";

// let store = createStore(todoApp);
{/*<Provider store={store}>*/}
{/*<Index />*/}
{/*</Provider>,*/}
ReactDOM.render(
    <TodoContainer/>,
    document.getElementById('content')
);

TodoActions.addTodo('My first task');
TodoActions.addTodo('Another task');
TodoActions.addTodo('Finish this tutorial');