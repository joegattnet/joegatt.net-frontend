import {
  LOAD_NOTES,
  LOAD_NOTES_SUCCESS,
  LOAD_NOTES_ERROR,
} from '../constants';

import {
  loadNotes,
  NotesLoaded,
  NoteLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadNotes', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_NOTES,
      };

      expect(loadNotes()).toEqual(expectedResult);
    });
  });

  describe('NotesLoaded', () => {
    it('should return the correct type and the passed notes', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_NOTES_SUCCESS,
        notes: fixture,
        username,
      };

      expect(NotesLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('NoteLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_NOTES_ERROR,
        error: fixture,
      };

      expect(NoteLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
