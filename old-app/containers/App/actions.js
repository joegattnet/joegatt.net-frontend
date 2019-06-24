/*
 * App Actions
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

import {
  LOAD_NOTES,
  LOAD_NOTES_SUCCESS,
  LOAD_NOTES_ERROR,
} from './constants';

/**
 * Load the Notes, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_NOTES
 */
export function loadNotes() {
  return {
    type: LOAD_NOTES,
  };
}

/**
 * Dispatched when the Notes are loaded by the request saga
 *
 * @param  {array} notes The Note data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_NOTES_SUCCESS passing the notes
 */
export function NotesLoaded(notes, username) {
  return {
    type: LOAD_NOTES_SUCCESS,
    notes,
    username,
  };
}

/**
 * Dispatched when loading the Notes fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_NOTES_ERROR passing the error
 */
export function NoteLoadingError(error) {
  return {
    type: LOAD_NOTES_ERROR,
    error,
  };
}
