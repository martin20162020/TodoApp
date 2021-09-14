import { 
  ADD_TODO, 
  DELETE_TODO, 
  EDIT_TODO,
  FETCH_TODO_TASKS,
  FETCH_TODO_TASK} from "./actionTypes";
import _ from "lodash";


const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODO_TASKS:
        return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_TODO_TASK:
      return { ...state, [action.payload.id]: action.payload };
    case ADD_TODO:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TODO:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_TODO:
      return _.omit(state, action.payload)
    default:
      return state;
  }
};

export default todosReducer;