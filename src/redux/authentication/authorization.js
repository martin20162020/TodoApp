import { SIGN_IN, SIGN_OUT } from '../authentication/actionTypes';

const INTIAL_STATE = {
  isSignedIn: null,
  name: false,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { 
          ...state, 
          isSignedIn: true, 
          name: action.payload
        };
    case SIGN_OUT:
      return { 
          ...state, 
          isSignedIn: false, 
          name: null
         };
    default:
      return state;
  }
};