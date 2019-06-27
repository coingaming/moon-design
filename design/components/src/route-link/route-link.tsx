import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

/* @TODO Revisit post-EPL */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const RouteLink: React.FC<NavLinkProps & { as?: any }> = ({
  children,
  to,
  as,
  ...props
}) => {
  return React.createElement(
    as || NavLink,
    {
      to,
      style: {
        color: 'inherit',
        textDecoration: 'none',
      },
      ...props,
    },
    children
  );
};
