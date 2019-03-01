/**
 * Organisations selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectOrgs = state => state.get('orgs', initialState);
console.log('State in selector', selectOrgs);

const makeSelectOrgs = () =>
  // createSelector(selectOrgs, orgstate => orgstate.orgs);
  createSelector(selectOrgs, state => state.get('orgs'));

const makeSelectLoading = () =>
  // createSelector(selectOrgs, state => state.loading);
  createSelector(selectOrgs, state => state.get('loading'));

const makeSelectEditOrgDialogOpen = () =>
  // createSelector(selectOrgs, state => state.loading);
  createSelector(selectOrgs, state => state.get('editOrgDialogOpen'));

const makeSelectEditOrgModules = () =>
  // createSelector(selectOrgs, state => state.loading);
  createSelector(selectOrgs, state => state.get('editOrgModules'));

const makeSelectEditOrgScopeError = () =>
  // createSelector(selectOrgs, state => state.loading);
  createSelector(selectOrgs, state => state.get('editOrgScopeError'));

const makeSelectError = () =>
  // createSelector(selectOrgs, state => state.error);
  createSelector(selectOrgs, state => state.get('error'));

export {
  selectOrgs,
  makeSelectOrgs,
  makeSelectLoading,
  makeSelectError,
  makeSelectEditOrgDialogOpen,
  makeSelectEditOrgScopeError,
  makeSelectEditOrgModules,
};
