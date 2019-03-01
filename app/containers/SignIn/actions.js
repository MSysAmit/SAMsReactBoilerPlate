/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, CHANGE_EMAIL, CHANGE_PASSWORD, SET_AUTH, RESET_VALUES } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {email} email The new text of the input field
 *
 * @return {object}    An action object with a type of SIGNED_IN
 */
export function logedInRequest(email, password) {
  return {
    type: LOGIN_REQUEST,
    email,
    password,
  };
}

export function logedInSuccess(email, password) {
  console.log("I am in loged in succes in action");
  return {
    type: LOGIN_SUCCESS,
    email,
    password
  };
}

export function logedInFailed(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}
export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}


export function setAuthState (newAuthState) {
  return {type: SET_AUTH, newAuthState}
}


export function resetValues (email, password) {
  return {type: RESET_VALUES, email, password}
}