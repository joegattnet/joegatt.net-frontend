import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { TAB } from 'variables';
import ArrowA from 'components/ArrowA';

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
    {isLink ? <ArrowA href={href}>{title}</ArrowA> : <SPAN href={href}>{title}</SPAN>}
  </Li>
);

Breadcrumb.propTypes = {
  href: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Breadcrumb.defaultProps = {
  isLink: true,
};

export default Breadcrumb;
