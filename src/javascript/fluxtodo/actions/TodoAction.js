import ActionTypes from '../constants/TodoActionTypes';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

const Actions = {
    addTodo(text) {
        TodoDispatcher.dispatch({
            type: ActionTypes.ADD_TODO,
            text,
        })
    },

    deleteTodo(id) {
        TodoDispatcher.dispatch({
            type: ActionTypes.DELETE_TODO,
            id,
        })
    },

    deleteCompletedTodos() {
        TodoDispatcher.dispatch({
            type: ActionTypes.DELETE_COMPLETED_TODOS
        })
    },

    toggleTodo(id) {
        TodoDispatcher.dispatch({
            type: ActionTypes.TOGGLE_TODO,
            id,
        })
    },

    toggleAllTodos() {
        TodoDispatcher.dispatch({
            type: ActionTypes.TOGGLE_ALL_TODOS
        })
    },

    updateDraft(text) {
        TodoDispatcher.dispatch({
            type: ActionTypes.UPDATE_DRAFT,
            text,
        })
    },

    startEditingTodo(id) {
        TodoDispatcher.dispatch({
            type: ActionTypes.START_EDITING_TODO,
            id,
        })
    },

    stopEditingTodo() {
        TodoDispatcher.dispatch({
            type: ActionTypes.STOP_EDITING_TODO,
        })
    },

    editTodo(id, text) {
        TodoDispatcher.dispatch({
            type: ActionTypes.EDIT_TODO,
            id,
            text,
        })
    },
};

export default Actions;