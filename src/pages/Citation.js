import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Citation extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.NoteQuery.refetch()
    }
  }

  render() {
    if (this.props.NoteQuery.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    if (this.props.NoteQuery.error) {
      console.error('ERROR!!!', this.props.NoteQuery);
      return (
        <div>
          Error!
        </div>
      )
    }
    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: this.props.NoteQuery.noteById.cachedHeadline }} />
        <section dangerouslySetInnerHTML={{ __html: this.props.NoteQuery.noteById.cachedBodyHtml }} />
        {this.props.children}
      </div>
    )
  }
}

const NOTE_QUERY = gql`
  query NoteQuery($noteId: Int!) {
    noteById (id: $noteId) {
      id
      cachedBodyHtml
      cachedHeadline
    }
  }
`;

// Stored proc: SELECT name, slug FROM tags, taggings WHERE taggable_type = 'Note' AND taggable_id = 164 AND taggings.concitation = 'tags' AND tags.id = taggings.tag_id

const ComponentWithQuery = graphql(NOTE_QUERY, {
  name: 'NoteQuery',
  options: ({ match }) => ({
    fetchPolicy: 'network-only',
    variables: {
      noteId: match.params.id,
    },
  }),
})(Citation);

export default withRouter(ComponentWithQuery);
