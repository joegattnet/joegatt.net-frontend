import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Home extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.promotedNotesQuery.refetch()
    }
  }
  render() {
    if (this.props.promotedNotesQuery.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    return (
      <div>
        <ul>
          {this.props.promotedNotesQuery.allNotes && this.props.promotedNotesQuery.allNotes.nodes.map((link, index) => (
            link.cachedUrl && <li key={index}>
              <Link to={link.cachedUrl} dangerouslySetInnerHTML={{ __html: link.cachedBlurbHtml }} />
            </li>
          ))}
        </ul>
        {this.props.children}
      </div>
    )
  }
}

const ALL_NOTES_QUERY = gql`
  query PromotedNotesQuery {
    allNotes(
      condition: {
        contentType: 0,
        hide: false,
        isPromoted: true,
        isSection: false,
        listable: true,
      },
      orderBy: UPDATED_AT_DESC
    ) {
      nodes {
        cachedUrl
        cachedBlurbHtml
      }
    }
  }
`;

export default graphql(ALL_NOTES_QUERY, {
  name: 'promotedNotesQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(Home);
