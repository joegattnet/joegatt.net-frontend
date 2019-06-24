/**
 * NoteListItem
 *
 * Lists the name and the issue count of a Note
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import IssueIcon from './IssueIcon';
import IssueLink from './IssueLink';
import NoteLink from './NoteLink';
import Wrapper from './Wrapper';

export class NoteListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    // Put together the content of the Note
    const content = (
      <Wrapper>
        <NoteLink href={item.canonical_url} target="_blank">
          {item.main_title}
        </NoteLink>
        <IssueLink href={`${item.html_url}/issues`} target="_blank">
          <IssueIcon />
          <FormattedNumber value={item.id} />
        </IssueLink>
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`note-list-item-${item.full_name}`} item={content} />
    );
  }
}

NoteListItem.propTypes = {
  item: React.PropTypes.object,
};

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
}))(NoteListItem);
