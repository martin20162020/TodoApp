import todos from '../../apis/todos'
import history from '../../history';
import axios from 'axios';
import { 
  ADD_TODO, 
  DELETE_TODO, 
  EDIT_TODO, 
  SIGN_IN, 
  SIGN_OUT,
  FETCH_TODO_TASK,
  FETCH_TODO_TASKS} 
  from "./actionTypes";



export const addTodo = (formValues) => async (dispatch, getState) => {
  const { name } = getState().auth;
  const { userId } = getState().auth;
  const response = await todos.post("/todos", { ...formValues, name, userId});

  dispatch({ type: ADD_TODO, payload: response.data });
  history.push("/");
};


export const deleteTodo = (id) => async (dispatch) => {
  await todos.delete(`/todos/${id}`);

  dispatch({ type: DELETE_TODO, payload: id });
  history.push("/");
};

export const editTodo = (id, formValues) => async dispatch => {
  const response = await todos.patch(`/todos/${id}`, formValues);

  dispatch({ type: EDIT_TODO, payload: response.data });
  history.push("/");
};

export const signIn = (userId, name) =>{
  return {
      type: SIGN_IN,
      payload: userId, name
    };
};

export const signOut = () =>{
  return{
      type: SIGN_OUT
  }
}

export const fetchTodoTasks = () => async dispatch => {
  const response = await todos.get("/todos");

  dispatch({ type: FETCH_TODO_TASKS, payload: response.data });
};


export const fetchTodoTask = (id) => async dispatch => {
  const response = await todos.get(`/todos/${id}`);

  dispatch({ type: FETCH_TODO_TASK, payload: response.data });
};












