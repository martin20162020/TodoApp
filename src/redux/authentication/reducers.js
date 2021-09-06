import { SIGN_IN, SIGN_OUT } from "./actionTypes";
import { GOOGLE_OAUTH2 } from "./actionTypes";

const initial_State = {
    isSignedIn: null,
    name: false,
    isSignedOut: true
};

export const googleReducer = (state = initial_State, action) =>{
        switch (action.type){
            case GOOGLE_OAUTH2:{
                return action.googleResponse;
            }
            case SIGN_IN:
                return {
                    ...state, 
                    isSignedIn: true,
                    name: action.payload,
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


// const userAuth = (state = initial_State, action) =>{
//     switch (action.type){
//         case GOOGLE_OAUTH2:{
//             return action.googleResponse;
//         }
//         case SIGN_IN:
//             return {
//                 ...state, 
//                 isSignedIn: true,
//                 name: action.payload,
//                 isSignedOut:false,     
//             }
//         case SIGN_OUT:
//             return {
//                 ...state,
//                 isSignedIn: false,
//                 name: '',
//                 isSignedOut:true
//             }
//         default:
//             return state;
//     }
// }

// export default userAuth;