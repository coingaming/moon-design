/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { colors } from '@heathmont/sportsbet-tokens';
import { disabled } from '@heathmont/sportsbet-utils';
jsx;

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  disabled?: boolean;
  secondary?: boolean;
  optional?: boolean;
  as?: any;
  to?: any;
};

/**
 * Styles
 */
const linkBase: CSSObject = {
  display: 'inline-block',
  margin: 0,
  padding: 0,
  font: 'inherit',
  color: colors.brand,
  backgroundColor: 'transparent',
  border: 0,
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover, &:focus, &:active': {
    color: colors.alternate.brand[10],
  },
  ...disabled(),
};

/**
 * Component
 */
const Link: React.FC<LinkProps> = styled('a', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'as',
})(({ href, secondary, optional, ...props }) => [
  linkBase,
  secondary && { color: colors.neutral[20] },
  optional && {
    color: colors.neutral[20],
    '&:hover, &:focus, &:active': {
      color: colors.neutral[10],
    },
  },
]);

export { Link, LinkProps };
