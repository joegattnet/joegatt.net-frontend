import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { UserContext } from '../helpers/UserContext';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

const TEXTS_QUERY = gql`
  query TextsQuery {
    texts {
      nodes {
        id
        title
        body
        cachedUrl
        cachedBlurbHtml
      }
    }
  }
`;

const StyledList = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: hidden;
  ul {
    list-style: none;
    margin: 0;
    width: 100%;
    max-height: 30em;
    overflow-y: auto;
    padding: 0 1em;
    li {
      width: 100%;
      height: 3em;
      display: flex;
      align-items: center;
      position: relative;
      border-top: 1px solid #eee;
      &:first-child {
        border-top: none;
      }
      div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        align-items: center;
      }
    }
  }
`;


export default () => {
  const { loading, error, data, } = useQuery(TEXTS_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <StyledList>
      <ul>
        {data.texts.nodes.map((text, index) => (
          <li key={text.id}>
            <div>
              ||{text.title}||
              <div to={text.cachedUrl} dangerouslySetInnerHTML={{ __html: text.body }} />
              <Link to={text.cachedUrl} dangerouslySetInnerHTML={{ __html: text.cachedBlurbHtml }} />
            </div>
          </li>
        ))}
      </ul>
    </StyledList>
  );
}
