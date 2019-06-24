/**
 * Tests for HomePage sagas
 */

import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';

import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_NOTES } from 'containers/App/constants';
import { NotesLoaded, NoteLoadingError } from 'containers/App/actions';

import { getNotes, githubData } from '../sagas';

const username = 'mxstbr';

/* eslint-disable redux-saga/yield-effects */
describe('getNotes Saga', () => {
  let getNotesGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getNotesGenerator = getNotes();

    const selectDescriptor = getNotesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getNotesGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the NotesLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First note',
    }, {
      name: 'Second note',
    }];
    const putDescriptor = getNotesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(NotesLoaded(response, username)));
  });

  it('should call the NoteLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getNotesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(NoteLoadingError(response)));
  });
});

describe('githubDataSaga Saga', () => {
  const githubDataSaga = githubData();
  const mockedTask = createMockTask();

  it('should start task to watch for LOAD_NOTES action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_NOTES, getNotes));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = githubDataSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = githubDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});
