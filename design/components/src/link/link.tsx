/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
import { disabled } from '@heathmont/sportsbet-utils';
jsx;

type LinkProps = {
  href?: string;
  disabled?: boolean;
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
const Link: React.FC<LinkProps> = ({ href, ...props }) => {
  const LinkElement = !href ? 'button' : 'a';

  return jsx(LinkElement, {
    href: href || undefined,
    css: linkBase,
    ...props,
  });
};

export { Link, LinkProps };
