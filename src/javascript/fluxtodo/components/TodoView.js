import React from 'react';
import classNames from 'classnames';

const ENTER_KEY_CODE = 13;
function TodoView(props) {
    return (
        <div>
            <h1>Flux Todo List</h1>
            <Header {...props} />
            <Main {...props} />
            <Footer {...props} />
        </div>
    );
}

function Header(props) {
    return (
        <header id="header">
            <h1>todos</h1>
            <NewTodo {...props} />
        </header>
    );
}

function NewTodo(props) {
    const addTodo = () => props.onAddTodo(props.draft);
    const onChange = (event) => props.onUpdateDraft(event.target.value);
    const onKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            addTodo();
        }
    };

    return (
        <input
            type="text"
            placeholder="What needs to be done?"
            value={props.draft}
            onKeyDown={onKeyDown}
            onChange={onChange}
        />
    );
}

function Main(props) {
    if (props.todos.size === 0) {
        return null;
    }

    const allComplete = props.todos.every(todo => todo.complete);

    return (
        <section id="main">
            <input
                type="checkbox"
                id="toggle-all"
                checked={allComplete ? 'checked' : ''}
                onChange={props.onToggleAllTodos}
            />
            <ul id="todo-list">
            {
                [...props.todos.values()].reverse().map(todo => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDeleteTodo={props.onDeleteTodo}
                            onToggleTodo={props.onToggleTodo}
                            editing={props.edit}
                            onStartEditingTodo={props.onStartEditingTodo}
                            onStopEditingTodo={props.onStopEditingTodo}
                            onEditTodo={props.onEditTodo}
                        />
                    );
                })
            }
            </ul>
        </section>
    );

}

function TodoItem(props) {
    const {todo, editing} = props;

    const onDeleteTodo = () => props.onDeleteTodo(todo.id);
    const onToggleTodo = () => props.onToggleTodo(todo.id);
    const onStartEditingTodo = () => props.onStartEditingTodo(todo.id);

    const isEditing = editing === todo.id;

    let input = null;
    if (isEditing) {
        const onStopEditingTodo = () => props.onStopEditingTodo();
        const onChange = (event) => props.onEditTodo(todo.id, event.target.value);
        const onKeyDown = (event) => {
            if (event.keyCode === ENTER_KEY_CODE) {
                onStopEditingTodo();
            }
        };

        input = <input
            type="text"
            value={todo.text}
            autoFocus={true}
            className="edit"
            onBlur={onStopEditingTodo}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    }

    return(
        <li className={
            classNames({
                complete: todo.complete,
                editing: isEditing
            })
        }>
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    checked={todo.complete}
                    onChange={onToggleTodo}
                />
                <label
                    style={{
                        textDecoration: todo.complete ? 'line-through' : 'none',
                        cursor: todo.complete ? 'default' : 'pointer'
                        }}
                    onDoubleClick={onStartEditingTodo}
                >
                    {todo.text}
                </label>
                <button className="destroy" onClick={onDeleteTodo}>Delete</button>
            </div>
            {input}
        </li>

    );
}

function Footer(props) {
    if (props.todos.size === 0) {
        return null;
    }

    const remaining = props.todos.filter(todo => !todo.complete).size;
    const phrase = remaining > 1 ? ' items left' : ' item left';
    const completed = props.todos.size - remaining;

    let deleteCompletedTodoButton = null;
    if (completed > 0) {
        deleteCompletedTodoButton =
            <button
                id="clear-completed"
                onClick={props.onDeleteCompletedTodos}
            >
                Clear Completed ({completed})
            </button>
    }

    return (
        <footer id="footer">
            <span id="tood-count">
                <strong>
                    {remaining}
                </strong>
                {phrase}
            </span>
            {deleteCompletedTodoButton}
        </footer>
    );
}

export default TodoView;