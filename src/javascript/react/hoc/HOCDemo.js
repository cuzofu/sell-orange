import React from 'react';
import { compose } from 'recompose';

import Todo from "./Todo";
import Counter from "./Counter";

const withTodosNull = (Component) => (props) => !props.todos ? <div><p>Error</p></div> : <Component {...props} />;
const withTodosEmpty = (Component) => (props) => !props.todos.length ? <div><p>You have no Todos.</p></div> : <Component {...props} />;
const withLoadingIndicator = (Component) => ({isLoadingTodos, ...other}) => isLoadingTodos ? <div><p>Loading todos ...</p></div> : <Component {...other} />;
const withConditionalRenderings = compose(withLoadingIndicator, withTodosNull, withTodosEmpty);

class TodoList extends React.Component {

    render() {
        return (
            <div>
                {this.props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            </div>
        );
    }

}

class TodoItem extends React.Component {

    render() {
        return(
            <div>
                <li>{this.props.todo.text}</li>
            </div>
        );
    }
}

const TodoListHOC = withLoadingIndicator(withTodosEmpty(withTodosNull(TodoList)));
const RecomposeTodoListHOC = withConditionalRenderings(TodoList);

class HOCApp extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: [
                new Todo({
                    id: Counter.increment(),
                    complete: false,
                    text: 'React'
                }),
                new Todo({
                    id: Counter.increment(),
                    complete: false,
                    text: 'Flux'
                })
            ],
            isLoadingTodos: true
        };
        this.showOrHide = this.showOrHide.bind(this);
    }

    showOrHide() {
        const isLoadingTodos = this.state.isLoadingTodos;
        this.setState(
            {isLoadingTodos: !isLoadingTodos}
        );
    }

    render() {
        return (
            <div>
                <button onClick={this.showOrHide}>{this.state.isLoadingTodos ? 'Show' : 'Hide'}</button>
                <RecomposeTodoListHOC todos={this.state.todos} isLoadingTodos={this.state.isLoadingTodos}/>
            </div>
        );
    }
}

export default HOCApp;