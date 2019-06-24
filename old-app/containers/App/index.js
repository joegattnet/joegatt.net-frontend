/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

import Header from 'components/Header';
import Page from 'components/Page';
import Content from 'components/Content';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

export function App(props) {
  return (
    <Page>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      <Header />
      <Content>
        {React.Children.toArray(props.children)}
      </Content>
      <Footer />
    </Page>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
