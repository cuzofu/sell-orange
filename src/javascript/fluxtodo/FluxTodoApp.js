import {Container} from 'flux/utils';

import TodoStore from "./stores/TodoStore";
import TodoView from "./components/TodoView";
import TodoAction from "./actions/TodoAction";
import TodoDraftStore from "./stores/TodoDraftStore";
import TodoEditStore from "./stores/TodoEditStore";

function getStores() {
    return [
        TodoStore,
        TodoDraftStore,
        TodoEditStore
    ];
}

function getState() {
    return {
        todos: TodoStore.getState(),
        draft: TodoDraftStore.getState(),
        edit: TodoEditStore.getState(),

        onAddTodo: TodoAction.addTodo,
        onDeleteTodo: TodoAction.deleteTodo,
        onDeleteCompletedTodos: TodoAction.deleteCompletedTodos,
        onToggleTodo: TodoAction.toggleTodo,
        onToggleAllTodos: TodoAction.toggleAllTodos,
        onUpdateDraft: TodoAction.updateDraft,
        onStartEditingTodo: TodoAction.startEditingTodo,
        onStopEditingTodo: TodoAction.stopEditingTodo,
        onEditTodo: TodoAction.editTodo
    }
}

export default Container.createFunctional(TodoView, getStores, getState);