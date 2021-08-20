import userReducer from './users/userReducer';
import { combineReducers } from 'redux';
import individualReducers from './individualReducer';
import userTodosReducer from './usersTodos/userTodosReducer';
import authReducer from './authorization'

export default combineReducers({
    todos: individualReducers,
    users: userReducer,
    userTodos: userTodosReducer,
    auth: authReducer
})