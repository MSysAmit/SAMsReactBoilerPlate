import { fromJS } from 'immutable';
import { EXPAND_REQUEST, COLLAPSE_REQUEST } from './constants';

// The initial state of the form
export const initialState = {
    openedIdx: '',
    open: false
};

function homeListReducer(state = initialState, action) {
  switch (action.type) {
    case EXPAND_REQUEST:
      return state
        .set('openedIdx', action.openedIdx)
        .set('open', false)
    case COLLAPSE_REQUEST:
      return state
        .set('openedIdx', false)
        .set('open', true)
    default:
      return state;
  }
}

export default homeListReducer;