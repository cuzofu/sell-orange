import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from "./javascript/fluxtodo/containers/TodoContainer";

import Index from './javascript/reduxtodo/index'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './javascript/reduxtodo/reducers/reducer';

import App from './javascript/refluxtodo/views/App'

let store = createStore(todoApp);

// 每次state更新时，打印日志
let unSubscribe = store.subscribe(() => {
    console.log(store.getState())
});

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Index />
        </Provider>
        <TodoContainer/>
        <App/>
    </div>,
    document.getElementById('content')
);
