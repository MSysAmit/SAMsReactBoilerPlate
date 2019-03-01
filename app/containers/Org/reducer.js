import { fromJS } from 'immutable';
import {
  FETCH_ORGS_SUCCEEDED,
  FETCH_ORGS_STARTED,
  CREATE_ORG_STARTED,
  CREATE_ORG_SUCCEEDED,
  UPDATE_ORG_STARTED,
  REMOVE_ORG_STARTED,
  FETCH_ORGS_FAILED,
  EDIT_ORG_DIALOG_OPEN,
  EDIT_ORG_NAME_ERROR_METHOD,
  CHANGE_ACTION,
} from './constants';
// The initial state of the Orgs
export const initialState = fromJS({
  orgs: [],
  loading: false,
  error: null,
  page: 0,
  rowsPerPage: 10,
  filterScope: '',
  filterName: '',
  editOrgDialogOpen: false,
  removeOrgDialogOpen: false,
  editOrgModules: '',
  editOrgDialogOpen: false,
  editOrgID: '',
  editOrgScope: '',
  editOrgScopeError: '',
  editOrgName: '',
  editOrgNameError: '',
});

function orgReducer(state = initialState, action) {
  console.log('I am in Orgreducer');
  if (!action || !action.type) {
    return state;
  }
  if (action.type.endsWith('_FAILED') || action.error) {
    return { ...state, error: action.payload };
  }
  switch (action.type) {
    case EDIT_ORG_DIALOG_OPEN:
      console.log('I am in EDIT_ORG_DIALOG_OPEN', action.dialogOpen);
      console.log('Action Data in editOrgDialogOpen', action);
      return state
        .set('editOrgDialogOpen', action.dialogOpen)
        .set(
          'editOrgModules',
          1
            ? [
                'Organisation & Structure',
                'SAM',
                'Cloud',
                'Audit Watch',
                'Licence Reviews',
                'Cloud Drive',
              ]
            : ['Organisation & Structure', 'SAM Lite', 'Cloud'],
        ); // because isScopePowerAdmin can only create SAM Lite);
    case EDIT_ORG_NAME_ERROR_METHOD:
      return state.set('editOrgScopeError', 'This field is required');
    case CHANGE_ACTION:
      return state.set('orgs', action.payload).set('loading', false);
    case FETCH_ORGS_STARTED:
      return state.set('loading', true).set('error', false);
    case FETCH_ORGS_SUCCEEDED:
      return state.set('orgs', action.payload.orgs).set('loading', false);
    case CREATE_ORG_STARTED:
      console.log('I am in Create org reducer action');
      return state.set('loading', true);
    case CREATE_ORG_SUCCEEDED:
      return state.set('loading', false).push('orgs', [action.payload.org]);
    case UPDATE_ORG_STARTED: // optimistic mutation
      return {
        orgs: orgs =>
          orgs.map(
            org =>
              org._id === action.payload.id
                ? { ...org, ...action.payload.params }
                : org,
          ),
      };
    case REMOVE_ORG_STARTED: // optimistic mutation
      return {
        orgs: orgs => orgs.filter(org => org._id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default orgReducer;
