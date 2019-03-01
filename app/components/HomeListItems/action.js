import { EXPAND_REQUEST, COLLAPSE_REQUEST } from './constants';


export function expandRequest(openedIdx) {
  return {
    type: EXPAND_REQUEST,
    openedIdx
  };
}

export function collapseRequest(openedIdx) {
  return {
    type: COLLAPSE_REQUEST,
    openedIdx
  };
}
