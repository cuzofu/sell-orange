import { createStore } from 'redux';
import todoApp from '../reducers/reducer';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/action';

let store = createStore(todoApp);

// 打印初始状态
console.log(store.getState());

// 每次state更新时，打印日志
let unSubscribe = store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducer'));
store.dispatch(addTodo('Learn about stores'));
store.dispatch(completeTodo('1'));
store.dispatch(completeTodo('2'));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unSubscribe();