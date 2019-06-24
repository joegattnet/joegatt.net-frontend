import styled from 'styled-components';
import {
  CONTENT_COLUMNS_SPAN,
  CONTENT_COLUMNS_START,
} from 'variables';

const Wrapper = styled.footer`
  grid-column-start: ${CONTENT_COLUMNS_START};
  grid-column-end: span ${CONTENT_COLUMNS_SPAN};
`;

export default Wrapper;
