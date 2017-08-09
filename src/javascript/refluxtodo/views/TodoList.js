import React from 'react';

const TodoItem = require("./TodoItem");

const TodoList = React.createClass({
    render() {

        console.log(this.props);
        if (this.props.todos.length) {
            var items = this.props.todos.map(item => {
                return <TodoItem todo={item} key={item.id} />
            });

            return (
                <div>
                    <ul>
                        {items}
                    </ul>
                </div>
            );
        } else {
            return (
                <div>
                    <p>There is nothing here!</p>
                </div>
            );
        }

    }

});

module.exports = TodoList;