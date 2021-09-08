import { SIGN_IN, SIGN_OUT } from "./actionTypes";

export const signIn = name =>{
    return {
        type: SIGN_IN,
        payload: name
      };
};

export const signOut = () =>{
    return{
        type: SIGN_OUT
    }
}

