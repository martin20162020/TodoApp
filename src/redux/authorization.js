const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

const initial_State = {
    isSignedIn: null,
    userId: null, 
    name: '',

};

export default (state = initial_State, action) =>{
    switch (action.type){
        case SIGN_IN:
            return {
                ...state, 
                isSignedIn: true,
                userId: action.payload, 
                name: window.gapi.auth2.getAuthInstance().currentUser.Td.Os.Ne              
            }
        case SIGN_OUT:
            return {
                ...state,
                isSignedIn: false,
                userId: null,
                name: ''
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
