import { FETCH_USERS_TODOS_FAILURE, FETCH_USERS_TODOS_SUCCESS, FETCH_USERS_TODOS_REQUEST } from "./userTodosTypes";
import axios from "axios";

export const fetchTodos = () =>{
    return (dispatch) => {
        dispatch(fetchTodosRequest)
        axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
        .then(response =>{
            const userTodos = response.data
            dispatch(fetchTodosSuccess(userTodos))
        })
        .catch(error =>{
            const errorMSG = error.message
            dispatch(fetchTodosFailure(errorMSG))
        })
    }
}


export const fetchTodosRequest = () =>{
    return {
        type: FETCH_USERS_TODOS_REQUEST
    }
}

export const fetchTodosSuccess = userTodos =>{
    return {
        type: FETCH_USERS_TODOS_SUCCESS,
        payload: userTodos
    }
}

export const fetchTodosFailure = error =>{
    return {
        type: FETCH_USERS_TODOS_FAILURE,
        payload:error
    }
}
