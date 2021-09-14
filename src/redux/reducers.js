import { combineReducers } from 'redux';
import authReducer from './authorization';
import todosReducer from './todos/todosReducer';

export default combineReducers({
    todos: todosReducer,
    auth: authReducer
})
