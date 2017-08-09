import React from 'react';

const AddTodo = require("./AddTodo");
const TodoList = require("./TodoList");

const Container = React.createClass({
    render() {
        return (
            <div>
                <h1>Reflux Todo List</h1>
                <AddTodo todos={this.props.todos} />
                <TodoList todos={this.props.todos} />
            </div>
        );
    }
});

module.exports = Container;