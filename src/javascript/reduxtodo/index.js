import React, { Component, PropTypes } from 'react';
import {DatePicker, message} from 'antd';

import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions/action';
import AddTodo from './views/AddTodo';
import TodoList from './views/TodoList';
import Footer from './views/Footer';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        };
    }

    handleChange(date) {
        if (date) {
            message.info('您选择的日期是：' + date.toString());
            this.setState({date});
        } else {
            this.setState({date: ''});
        }
    }

    render() {
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
            <div style={{width: 400, margin: '100px auto'}}>
                <DatePicker onChange={value => this.handleChange(value)}/>
                <div style={{marginTop: 20}}>当前日期：{this.state.date.toString()}</div>
                <div>
                    <AddTodo
                        onAddClick={text =>
                            dispatch(addTodo(text))
                        } />
                    <TodoList
                        todos={visibleTodos}
                        onTodoClick={index =>
                            dispatch(completeTodo(index))
                        } />
                    <Footer
                        filter={visibilityFilter}
                        onFilterChange={nextFilter =>
                            dispatch(setVisibilityFilter(nextFilter))
                        } />
                </div>
            </div>
        );
    }
}

Index.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Index)