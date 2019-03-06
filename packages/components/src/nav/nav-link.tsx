/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import { animation, colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { underlineWidth } from './settings';

/**
 * Types
 *
 * 1. String or React Component.
 * 2. Allows us to pass in any props associated to the `element`.
 */
type NavLinkProps = {
  active?: boolean;
  element?: any /* [1] */;
  [prop: string]: any /* [2] */;
};

/**
 * Component
 */
const NavLink: React.FC<NavLinkProps> = ({ active, element = 'a', ...props }) =>
  jsx(element, {
    ...props,
    'aria-current': active ? 'page' : undefined,
    css: css({
      position: 'relative',
      padding: 0,
      margin: 0,
      fontSize: 'inherit',
      fontFamily: 'inherit',
      backgroundColor: 'transparent',
      color: colors.neutral[20],
      transition: `color ${animation.speed.default}s ease`,
      textDecoration: 'none',
      border: 0,
      appearance: 'none',
      '&:after': {
        content: '""',
        position: 'absolute',
        height: `${underlineWidth}px`,
        width: spacing('medium'),
        left: 0,
        right: 0,
        bottom: `-${spacing('small')}`,
        margin: '0 auto',
        backgroundColor: colors.brand,
        transform: 'scaleX(0)',
        transition: `transform ${animation.speed.default}s ease`,
      },
      '&:hover, &:focus, &:active, &[aria-current=page]': {
        color: colors.neutral[10],
        cursor: 'pointer',
        '&:after': {
          transform: 'scaleX(1)',
        },
      },
    }),
  });

export { NavLink, NavLinkProps };
