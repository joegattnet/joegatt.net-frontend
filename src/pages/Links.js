import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { UserContext } from '../helpers/UserContext';
import gql from 'graphql-tag';
import React from 'react';

const LINKS_QUERY = gql`
  query LinksQuery {
    links {
      nodes {
        id
        cachedHeadline
        cachedUrl
        cachedBlurbHtml
        cachedSourceHtml
      }
    }
  }
`;

export default () => {
  const { loading, error, data, } = useQuery(LINKS_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.links.nodes.map((link, index) => {
        if (!link.cachedUrl) {
          return null;
        }
        return (
          <li key={link.id}>
            <Link to={link.cachedUrl}>
              <p dangerouslySetInnerHTML={{ __html: link.cachedHeadline }} />
              <p dangerouslySetInnerHTML={{ __html: link.cachedBlurbHtml }} />
              <p dangerouslySetInnerHTML={{ __html: `&mdash; ${link.cachedSourceHtml}` }} />
            </Link>
          </li>
        )
      })}
    </ul>
  );
}
