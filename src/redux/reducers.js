import userReducer from './users/userReducer';
import { combineReducers } from 'redux';
import individualReducers from './todos/individualReducer';
import userTodosReducer from './usersTodos/userTodosReducer';
import authReducer from './authentication/authorization';
import authenReducer from './authentication/reducers';
import { googleReducer } from './authentication/reducers';

export default combineReducers({
    todos: individualReducers,
    users: userReducer,
    userTodos: userTodosReducer,
    auth: googleReducer,
    // authen: authenReducer,
    // googleReducer
})