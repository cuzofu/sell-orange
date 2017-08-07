import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './components/Reducers/reducer';

let store = createStore(todoApp);

// 每次state更新时，打印日志
let unSubscribe = store.subscribe(() => {
    console.log(store.getState())
});

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('content')
);
