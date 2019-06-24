import React, { PropTypes } from 'react';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import NoteListItem from 'containers/NoteListItem';

function NotesList({ loading, error, notes }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (notes !== false) {
    return <List items={notes.texts} component={NoteListItem} />;
  }

  return null;
}

NotesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  notes: PropTypes.any,
};

export default NotesList;
