/**
 * Gets the Notes of the user from Github
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_NOTES } from 'containers/App/constants';
import { NotesLoaded, NoteLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github notes request/response handler
 */
export function* getNotes() {
  // Select username from store
  const requestURL = 'http://joegatt.net/texts.json';

  try {
    // Call our request helper (see 'utils/request')
    const notes = yield call(request, requestURL);
    yield put(NotesLoaded(notes));
  } catch (err) {
    yield put(NoteLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for LOAD_NOTES actions and calls getNotes when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_NOTES, getNotes);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubData,
];
