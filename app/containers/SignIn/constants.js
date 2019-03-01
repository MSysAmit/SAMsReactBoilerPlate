/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOGIN_REQUEST = 'boilerplate/SignIn/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'boilerplate/SignIn/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'boilerplate/SignIn/LOGIN_ERROR';
export const SET_AUTH = 'boilerplate/SignIn/SET_AUTH';
export const CHANGE_EMAIL = 'boilerplate/SignIn/CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'boilerplate/SignIn/CHANGE_PASSWORD';
export const RESET_VALUES = 'boilerplate/SignIn/RESET_VALUES';
