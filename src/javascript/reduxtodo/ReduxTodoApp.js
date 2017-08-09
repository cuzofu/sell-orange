import React from 'react';
var createReactClass = require('create-react-class');
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Index from './views/index'
import todoApp from './reducers/reducer';

let store = createStore(todoApp);

// 每次state更新时，打印日志
let unSubscribe = store.subscribe(() => {
    console.log(store.getState())
});

export default createReactClass({
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        );
    }
});
