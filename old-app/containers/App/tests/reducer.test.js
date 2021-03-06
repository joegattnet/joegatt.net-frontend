import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadNotes,
  NotesLoaded,
  NoteLoadingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentUser: false,
      userData: fromJS({
        Notes: false,
      }),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadNotes action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['userData', 'Notes'], false);

    expect(appReducer(state, loadNotes())).toEqual(expectedResult);
  });

  it('should handle the NotesLoaded action correctly', () => {
    const fixture = [{
      name: 'My Note',
    }];
    const username = 'test';
    const expectedResult = state
      .setIn(['userData', 'Notes'], fixture)
      .set('loading', false)
      .set('currentUser', username);

    expect(appReducer(state, NotesLoaded(fixture, username))).toEqual(expectedResult);
  });

  it('should handle the NoteLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, NoteLoadingError(fixture))).toEqual(expectedResult);
  });
});
