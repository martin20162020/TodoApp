import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionTypes";

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: state.todos.concat(action.payload)};

    case DELETE_TODO:
      let updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: updatedTodos };

    case EDIT_TODO:
      const editedTodos = state.todos.map(todo => todo.id === action.id.id ?
        {...todo, completed: !todo.completed} : todo
       )

      return {
        ...state, 
        todos: editedTodos
      }

    default:
      return state;
  }
};

export default todos;