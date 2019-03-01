import { RSAA } from 'redux-api-middleware';
// import utils from '../../utils';
import auth from '../SignIn/auth/auth';
import {
  FETCH_ORGS_SUCCEEDED,
  FETCH_ORGS_STARTED,
  CREATE_ORG_STARTED,
  FETCH_ORGS_FAILED,
  EDIT_ORG_DIALOG_OPEN,
  CHANGE_ACTION,
} from './constants';

export function fetchOrgs() {
  console.log('i am in fetchOrgs action');
  console.log('Token in fetchOrgs action', auth.token);
  return {
    types: [FETCH_ORGS_STARTED, FETCH_ORGS_SUCCEEDED, FETCH_ORGS_FAILED],
    [RSAA]: {
      endpoint: 'http://localhost:8000/api/orgs',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token,
      },
      method: 'GET',
    },
  };
}

export function createOrg(params = {}) {
  // export function createOrg(params) {
  console.log('Parameters are ###########', params);
  console.log('i am in create org action');
  return {
    type: CREATE_ORG_STARTED,
    [RSAA]: {
      endpoint: 'http://localhost:8000/api/orgs',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token,
      },
      method: 'POST',
      body: JSON.stringify(params),
      types: [
        'CREATE_ORG_STARTED',
        'CREATE_ORG_SUCCEEDED',
        'CREATE_ORG_FAILED',
      ],
    },
  };
}

// export const editOrgDialogOpenMethod = dialogOpen => {
//   return dispatch => {
//     dispatch({ type: 'EDIT_ORG_DIALOG_OPEN', dialogOpen });
//   };
// };

export const editOrgDialogOpenMethod = dialogOpen => {
  return { type: EDIT_ORG_DIALOG_OPEN, dialogOpen };
};

export const editOrgScopeErrorMethod = error => {
  return { type: EDIT_ORG_SCOPE_ERROR_METHOD, error };
};

export const changeAction = e => {
  return { type: CHANGE_ACTION, e };
};
