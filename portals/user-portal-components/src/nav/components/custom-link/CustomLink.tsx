/** @jsx jsx */
import { FC, AnchorHTMLAttributes } from 'react';
import { jsx } from '@emotion/core';
import { NavLinkProps } from 'react-router-dom';

jsx;

export type CustomLinkProps = Partial<NavLinkProps> &
  Partial<AnchorHTMLAttributes<{}>> & {
    as?: any;
  };

export const CustomLink: FC<CustomLinkProps> = ({
  href,
  as,
  to,
  children,
  css,
  ...rest
}) => {
  if (to !== undefined && to !== null) {
    return jsx(as, { css, to, children, ...rest });
  }
  return (
    <a href={href} css={css} {...rest}>
      {children}
    </a>
  );
};
