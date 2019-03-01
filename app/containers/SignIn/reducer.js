import { fromJS } from 'immutable';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, CHANGE_EMAIL, CHANGE_PASSWORD, SET_AUTH, RESET_VALUES } from './constants';

// The initial state of the form
export const initialState = fromJS({
  email: '',
  password: '',
  loading: false,
  error: false,
  isSigningIn: false
});

function formReducer(state = initialState, action) {
  console.log("I am in reducer");
  console.log("state in reducer", state);
  console.log("action in reducer", action);
  switch (action.type) {
    case LOGIN_REQUEST:
      return state
        .set('loading', true)
        .set('error', false)
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('isSigningIn', true)
    case LOGIN_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SET_AUTH:
      return {...state, loggedIn: action.newAuthState}
    case RESET_VALUES:
      return {...state, email: action.email, password: action.password}
    default:
      return state;
  }
}

export default formReducer;