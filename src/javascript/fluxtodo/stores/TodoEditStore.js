import {ReduceStore} from 'flux/utils';
import TodoDispatcher from "../dispatcher/TodoDispatcher";
import ActionTypes from "../constants/TodoActionTypes";

class TodoEditStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return '';
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.START_EDITING_TODO:
                return action.id;
            case ActionTypes.STOP_EDITING_TODO:
                return '';
            default:
                return state;
        }
    }
}

export default new TodoEditStore();