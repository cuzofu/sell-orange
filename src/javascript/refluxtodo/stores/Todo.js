import * as Immutable from "immutable";

var Todo = Immutable.Record({
    id: '',
    complete: false,
    text: ''
});

export default Todo;