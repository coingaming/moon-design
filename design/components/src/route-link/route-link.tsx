import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const RouteLink: React.FC<NavLinkProps & { as: any }> = ({
  children,
  to,
  as,
}) => {
  return React.createElement(as || NavLink, { to }, children);
};
