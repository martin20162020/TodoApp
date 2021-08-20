import { FETCH_USERS_TODOS_REQUEST, FETCH_USERS_TODOS_SUCCESS, FETCH_USERS_TODOS_FAILURE } from "../usersTodos/userTodosTypes"
const initialState = {
    loading: false,
    userTodos: [],
    error: '',
}

const UserTodoReducer = (state = initialState, action) =>{
    switch(action.type) {
        case FETCH_USERS_TODOS_REQUEST:
            return {
                ...state, 
                loading:true
            }
        case FETCH_USERS_TODOS_SUCCESS:
            return {
                loading:false,
                userTodos:action.payload,
                error: ''
            }
        case FETCH_USERS_TODOS_FAILURE:
            return {
                loading: false,
                userTodos:action.payload,
            }
        
        default: return state
    }
}

export default UserTodoReducer