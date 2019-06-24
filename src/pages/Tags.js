import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { UserContext } from '../helpers/UserContext';
import gql from 'graphql-tag';
import React from 'react';

const TAGS_QUERY = gql`
  query TagsQuery {
    activeTags {
      totalCount
      nodes {
        activeTagsCount
        name
        slug
      }
    }
  }
`;

export default () => {
  const { loading, error, data, } = useQuery(TAGS_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.activeTags.nodes.map((tag, index) => (
        <li key={tag.slug}>
          <Link to={`/tags/${tag.slug}`}>{tag.name}</Link>
          <span className="count">{tag.activeTagsCount}</span>
        </li>
      ))}
    </ul>
  );
}
