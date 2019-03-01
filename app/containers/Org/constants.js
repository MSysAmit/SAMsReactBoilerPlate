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

export const CREATE_ORG_STARTED = 'boilerplate/Org/CREATE_ORG_STARTED';
export const CREATE_ORG_SUCCEEDED = 'boilerplate/Org/CREATE_ORG_SUCCEEDED';
export const CREATE_ORG_FAILED = 'boilerplate/Org/CREATE_ORG_FAILED';
export const SET_PAGE = 'boilerplate/Org/SET_PAGE';
export const SET_ROWS_PER_PAGE = 'boilerplate/Org/SET_ROWS_PER_PAGE';
export const FILTER_SCOPE = 'boilerplate/Org/FILTER_SCOPE';
export const FILTER_NAME = 'boilerplate/Org/FILTER_NAME';
export const EDIT_ORG_DIALOG_OPEN = 'boilerplate/Org/EDIT_ORG_DIALOG_OPEN';
export const REMOVE_ORG_DIALOG_OPEN = 'boilerplate/Org/REMOVE_ORG_DIALOG_OPEN';
export const FETCH_ORGS_STARTED = 'boilerplate/Org/FETCH_ORGS_STARTED';
export const FETCH_ORGS_SUCCEEDED = 'boilerplate/Org/FETCH_ORGS_SUCCEEDED';
export const FETCH_ORGS_FAILED = 'boilerplate/Org/FETCH_ORGS_FAILED';
export const EDIT_ORG_NAME_ERROR_METHOD =
  'boilerplate/Org/EDIT_ORG_NAME_ERROR_METHOD';
export const EDIT_ORG_SCOPE_ERROR_METHOD =
  'boilerplate/Org/EDIT_ORG_SCOPE_ERROR_METHOD';
export const CHANGE_ACTION = 'boilerplate/Org/CHANGE_ACTION';

CHANGE_ACTION;
