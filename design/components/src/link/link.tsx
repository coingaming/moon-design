/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
import { disabled } from '@heathmont/sportsbet-utils';
jsx;

type LinkProps = {
  href?: string;
  disabled?: boolean;
  secondary?: boolean;
  optional?: boolean;
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
const Link: React.FC<LinkProps> = ({ href, secondary, optional, ...props }) => {
  const LinkElement = !href ? 'button' : 'a';
  const secondaryProps = secondary ? { color: colors.neutral[20] } : {};
  const optionalProps = optional
    ? {
        color: colors.neutral[20],
        '&:hover, &:focus, &:active': {
          color: colors.neutral[10],
        },
      }
    : {};

  return jsx(LinkElement, {
    href: href || undefined,
    css: { ...linkBase, ...secondaryProps, ...optionalProps },
    ...props,
  });
};

export { Link, LinkProps };
