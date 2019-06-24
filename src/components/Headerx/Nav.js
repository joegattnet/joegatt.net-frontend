import styled from 'styled-components';
import { CONTENT_COLUMNS_START, CONTENT_COLUMNS_SPAN } from '../../variables';

export default styled.nav`
  grid-column-start: ${CONTENT_COLUMNS_START};
  grid-column-end: span ${CONTENT_COLUMNS_SPAN};
`;
