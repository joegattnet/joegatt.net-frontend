import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { UserContext } from '../helpers/UserContext';
import gql from 'graphql-tag';
import React from 'react';

const CITATIONS_QUERY = gql`
  query CitationsQuery {
    citations {
      nodes {
        id
        cachedUrl
        cachedBlurbHtml
      }
    }
  }
`;

export default () => {
  const { loading, error, data, } = useQuery(CITATIONS_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.citations.nodes.map((citation, index) => {
        if (!citation.cachedUrl) {
          return null;
        }
        return (
          <li key={citation.id}>
            <Link to={citation.cachedUrl}>
              <p dangerouslySetInnerHTML={{ __html: citation.cachedBlurbHtml }} />
              <p dangerouslySetInnerHTML={{ __html: `&mdash; ${citation.cachedSourceHtml}` }} />
            </Link>
          </li>
        )
      })}
    </ul>
  );
}
