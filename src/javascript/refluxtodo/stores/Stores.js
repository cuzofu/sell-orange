import Reflux from 'reflux';

import Actions from '../actions/Actions';
import Todo from './Todo';
import Counter from "./Counter";

module.exports = Reflux.createStore({
    listenables: [Actions],

    getInitialState() {
        this.todoItems = [];
        return this.todoItems;
    },

    onAddItem(text) {
        this.updateTodoItems([new Todo({
            id: Counter.increment(),
            text: text,
            complete: false
        })].concat(this.todoItems));
    },

    updateTodoItems(items) {
        this.todoItems = items;
        this.trigger(this.todoItems);
    }
});