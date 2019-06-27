/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { colors } from '@heathmont/sportsbet-tokens';
import { disabled } from '@heathmont/sportsbet-utils';
import { ButtonModifiers, buttonModifiers } from '../button/modifiers';
import { buttonStyles } from '../button/button';

jsx;

/* @TODO Revisit post-EPL */
/* eslint-disable @typescript-eslint/no-explicit-any */
type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  disabled?: boolean;
  secondary?: boolean;
  optional?: boolean;
  buttonModifier: ButtonModifiers;
  as?: any;
  to?: any;
  // Manually added these because NavLinkProps extending causes TS errors
  activeClassName?: string;
  activeStyle?: any;
  exact?: boolean;
  strict?: boolean;
  isActive?: any;
  location?: any;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

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
    color: colors.palette.piccolo[60],
  },
  ...disabled(),
};

/**
 * Component
 */
/* @TODO Revisit post-EPL */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const Link: React.FC<any> = styled('a', {
  shouldForwardProp: prop =>
    prop === 'exact' || (isPropValid(prop) && prop !== 'as'),
  // @TODO Revisit post-EPL
  // @ts-ignore unused variables
})(({ href, secondary, optional, buttonStyled, ...props }) => [
  linkBase,
  secondary && { color: colors.neutral[20] },
  optional && {
    color: colors.neutral[20],
    '&:hover, &:focus, &:active': {
      color: colors.neutral[10],
    },
  },
  buttonStyled && {
    ...buttonStyles,
    ...buttonModifiers.secondary,
    '&.active': {
      ...buttonModifiers.primary,
    },
  },
]);

export { Link, LinkProps };
