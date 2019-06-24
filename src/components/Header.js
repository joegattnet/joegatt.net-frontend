import React from 'react';
import styled from 'styled-components';

import {
  CONTENT_COLUMNS_START,
  CONTENT_COLUMNS_SPAN,
  RED,
} from '../variables';

const StyledHeader = styled.header`
  grid-column-start: ${CONTENT_COLUMNS_START};
  grid-column-end: span ${CONTENT_COLUMNS_SPAN};
  h1 {
    color: ${RED};
    font-size: 32px;
    font-weight: 600;
  }
`;

export default ({ headline, subheadline }) => (
  <StyledHeader>
    <nav>xxx</nav>
    <h1 dangerouslySetInnerHTML={{  __html: headline }} />
    {subheadline && <h2 dangerouslySetInnerHTML={{  __html: subheadline }} />}
  </StyledHeader>
);
