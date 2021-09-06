import { SIGN_IN, SIGN_OUT } from "./actionTypes";

const initial_State = {
    isSignedIn: null,
    name: false,
    isSignedOut: true
};


export default (state = initial_State, action) =>{
    switch (action.type){
        case SIGN_IN:
            return {
                ...state, 
                isSignedIn: true,
                name: action.payload ,
                isSignedOut:false,      
            }
        case SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                name: '',
                isSignedOut:true
            }
        default:
            return state;
    }
}

export const signIn = (name) =>{
    return {
        type: SIGN_IN,
        payload: name
    }
}

export const signOut = () =>{
    return {
        type: SIGN_OUT
    }
}