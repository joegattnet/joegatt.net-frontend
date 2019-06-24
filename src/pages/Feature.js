import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Feature extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.props.featureQuery.refetch()
    }
  }

  render() {
    const query = this.props.featureQuery;
    if (query.loading) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    if (query.error || query.featureNote.totalCount === 0) {
      return (
        <div>
          Error!
        </div>
      )
    }
    const featureNote = query.featureNote.nodes[0];
    const featureIndexLinks = query.featureIndex.nodes;
    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: featureNote.cachedHeadline }} />
        <section dangerouslySetInnerHTML={{ __html: featureNote.cachedBodyHtml }} />
        {query.featureIndex.totalCount > 1 && <ul>
          {featureIndexLinks.map((link, index) => (
            link.cachedHeadline && <li key={index}>
              <Link to={link.cachedUrl} dangerouslySetInnerHTML={{ __html: link.cachedHeadline }} />
            </li>
          ))}
        </ul>}
        {this.props.children}
      </div>
    )
  }
}

const FEATURE_QUERY = gql`
  query FeatureQuery($feature: String!, $featureId: String!) {
    featureNote: allNotes(
      condition: {
        feature: $feature,
        featureId: $featureId,
        contentType: 0,
        isFeature: true,
        hide: false
      }
    ) {
      nodes {
        cachedBodyHtml
        cachedHeadline
      }
      totalCount
    }
    featureIndex: allNotes(
      condition: {
        feature: $feature,
        contentType: 0,
        isFeature: true,
        hide: false
      },
      orderBy: TITLE_ASC
    ) {
      nodes {
        cachedHeadline
        cachedUrl
      }
      totalCount
    }
  }
`;

export default graphql(FEATURE_QUERY, {
  name: 'featureQuery',
  options: ({ match }) => ({
    fetchPolicy: 'network-only',
    variables: {
      feature: match.params.feature,
      featureId: match.params.featureId
    },
  }),
})(Feature);
