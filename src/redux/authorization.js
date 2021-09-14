import { SIGN_IN, SIGN_OUT } from './todos/actionTypes';

const INTIAL_STATE = {
  isSignedIn: null,
  userId: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { 
          ...state, 
          isSignedIn: true, 
          userId: action.payload
        };
    case SIGN_OUT:
      return { 
          ...state, 
          isSignedIn: false, 
          userId: null
         };
    default:
      return state;
  }
};