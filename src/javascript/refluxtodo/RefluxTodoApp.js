import React from 'react';
import Reflux from 'reflux';

const TodoContainer = require('./views/Container');
const TodoStore = require('./stores/Stores');

export default React.createClass({
    mixins: [Reflux.connect(TodoStore, "list")],
    render() {
        return (
            <TodoContainer todos={this.state.list} />
        );
    }
});
