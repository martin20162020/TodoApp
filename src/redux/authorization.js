import { SIGN_IN, SIGN_OUT } from './todos/actionTypes';

const INTIAL_STATE = {
  isSignedIn: null,
  name: false,
  userId: false
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { 
          ...state, 
          isSignedIn: true, 
          name: action.payload.name,
          userId: action.payload.userId
        };
    case SIGN_OUT:
      return { 
          ...state, 
          isSignedIn: false, 
          profile: null
         };
    default:
      return state;
  }
};