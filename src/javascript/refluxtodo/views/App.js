import React from 'react';
import Reflux from 'reflux';

const TodoContainer = require('./Container');
const TodoStore = require('../stores/Stores');

const App = React.createClass({
    mixins: [Reflux.connect(TodoStore, "list")],
    render() {
        return (
            <TodoContainer todos={this.state.list} />
        );
    }
});

module.exports = App;