import {ReduceStore} from 'flux/utils';
import Immutable from 'immutable';

import TodoActionTypes from '../constants/TodoActionTypes';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Counter from "./Counter";
import Todo from "./Todo";

class TodoStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                if (!action.text) {
                    return state;
                }
                const id = Counter.increment();
                return state.set(id, new Todo({
                    id: id,
                    text: action.text,
                    complete: false
                }));
            case TodoActionTypes.DELETE_TODO:
                return state.delete(action.id);
            case TodoActionTypes.DELETE_COMPLETED_TODOS:
                return state.filter(todo => !todo.complete);
            case TodoActionTypes.TOGGLE_TODO:
                return state.update(
                    action.id,
                    todo => todo.set('complete', !todo.complete)
                );
            case TodoActionTypes.TOGGLE_ALL_TODOS:
                const allComplete = state.every(todo => todo.complete);
                return state.map(todo => todo.set('complete', !allComplete));
            case TodoActionTypes.EDIT_TODO:
                return state.setIn([action.id, 'text'], action.text);
            default:
                return state;
        }
    }
}

export default new TodoStore();