/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
jsx;

type LinkProps = {
  href?: string;
  disabled?: boolean;
};

/**
 * Styles
 */
const linkBase = css([
  {
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
      color: colors.highlight,
    },
    '&:disabled, &[disabled]': {
      color: colors.neutral[30],
      cursor: 'not-allowed',
    },
  },
]);

/**
 * Component
 */
const Link: React.FC<LinkProps> = ({ href, ...props }) => {
  const LinkElement = !href ? 'button' : 'a';

  return jsx(LinkElement, {
    href: href || undefined,
    css: linkBase,
    ...props,
  });
};

export { Link, LinkProps };
