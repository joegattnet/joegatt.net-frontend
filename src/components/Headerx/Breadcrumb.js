import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { TAB } from '../../variables';
import ArrowA from '../ArrowA';

import { ArrowRight } from 'styled-icons/typicons/ArrowRight';

const Arrow = styled(ArrowRight).attrs({ size: '24px' })`
  cursor: pointer;
`;

const Li = styled.li`
  display: inline-block;
  margin-right: ${TAB};
  text-transform: lowercase;
`;

const SPAN = ArrowA.withComponent('span');

const Breadcrumb = ({
  href,
  isLink,
  title,
}) => (
  <Li>
    {isLink ? <ArrowA href={href}><Arrow />{title}</ArrowA> : <SPAN href={href}><Arrow />{title}</SPAN>}
  </Li>
);

// Breadcrumb.propTypes = {
//   href: PropTypes.string.isRequired,
//   isLink: PropTypes.bool,
//   title: PropTypes.string.isRequired,
// };

Breadcrumb.defaultProps = {
  isLink: true,
};

export default Breadcrumb;
