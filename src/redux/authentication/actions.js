import { SIGN_IN, SIGN_OUT } from "./actionTypes";
import { GOOGLE_OAUTH2 } from "./actionTypes";

export const signIn = (name) =>({
        type: SIGN_IN,
        payload: name
});

export const signOut = () =>({
        type: SIGN_OUT
})


export const googleOAuth2 = googleResponse =>{
    return async (dispatch) =>{
        if (typeof googleResponse === 'undefined'){
            googleResponse = []
        }
        dispatch({ type: GOOGLE_OAUTH2, googleResponse})
    }
}

