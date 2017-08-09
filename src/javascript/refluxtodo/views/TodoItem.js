import React from 'react';

const TodoItem = React.createClass({
    render() {
        return (
            <div>
                <li>
                    {this.props.todo.text}
                </li>
            </div>
        );
    }
});

module.exports = TodoItem;