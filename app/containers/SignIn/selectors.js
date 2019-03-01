/**
 * SignInPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignIn = state => state.get('form', initialState);
console.log("State in selector", (selectSignIn));

const makeSelectEmail = () =>
  createSelector(selectSignIn, state => state.get('email'));


const makeSelectPassword = () =>
createSelector(selectSignIn, state => state.get('password'));




export { selectSignIn, makeSelectEmail, makeSelectPassword };


