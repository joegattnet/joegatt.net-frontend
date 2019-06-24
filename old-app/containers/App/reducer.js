/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_NOTES_SUCCESS,
  LOAD_NOTES,
  LOAD_NOTES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    Notes: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_NOTES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'Notes'], false);
    case LOAD_NOTES_SUCCESS:
      return state
        .setIn(['userData', 'Notes'], action.notes)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_NOTES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
