import { Chart } from 'react-google-charts';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { UserContext } from '../helpers/UserContext';
import gql from 'graphql-tag';
import React, { useEffect } from 'react';

import Header from '../components/Header';
import Text from '../components/Text';

const TEXT_QUERY = gql`
  query TextsQuery($textId: Int) {
    text(uid: $textId) {
      id
      body
      cachedBodyHtml
      cachedHeadline
      cachedSubheadline
      distance
      introduction
      wordCount
    }
  }
`;

export default ({ match }) => {
  const { loading, error, data, } = useQuery(TEXT_QUERY, { variables: { textId: parseInt(match.params.id, 10) } });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <article>
      <Header
        headline={data.text.cachedHeadline}
        subheadline={data.text.cachedSubheadline}
      />
      <Text>
        <section dangerouslySetInnerHTML={{ __html: data.text.body }} />
        <section dangerouslySetInnerHTML={{ __html: data.text.cachedBodyHtml }} />
      </Text>
      <Chart
        chartType="AreaChart"
        data={[["Age", "Weight"], [4, 5.5], [4.5, 3.5], [4.75, 3.5], [4.825, 3.5], [5, 5.9], [5.5, 11], [6, 2.1], [6.5, 2.3], [7, 7.9], [7.5, 4.1], [8, 12], [9.1, 13]]}
        width="100%"
        height="400px"
        legendToggle
      />
    </article>
  );
}
