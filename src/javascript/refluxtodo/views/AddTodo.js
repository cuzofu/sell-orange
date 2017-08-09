import React from 'react';

import Actions from '../actions/Actions';

const AddTodo = React.createClass({

    submitTodo(event) {
        event.preventDefault();
        let text = this.refs.todo.value.trim();
        if (text) {
            Actions.addItem(text);
            this.refs.todo.value = '';
        }
    },

    render() {
        return (
            <div>
                <form onSubmit={this.submitTodo}>
                    <input
                        type="text"
                        placeholder="What need to be done"
                        ref="todo"
                        autoFocus={true}
                    />
                    <input
                        type="submit"
                        value="Add Todo"
                    />
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;