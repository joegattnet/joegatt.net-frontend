import React from 'react';
import styled from 'styled-components';

import NavBar from './Nav';
import Breadcrumb from './Breadcrumb';

const Ol = styled.section`
  padding: 0;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        <Ol>
          <Breadcrumb href="/" title="Home" />
          <Breadcrumb href="/texts" title="Texts" />
          <Breadcrumb href="/texts/234" isLink={false} title="Text 234" />
        </Ol>
      </NavBar>
    );
  }
}

export default Header;
