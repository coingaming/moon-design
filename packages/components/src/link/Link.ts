import { disabled } from '@heathmont/moon-utils';
import styled from 'styled-components';

type LinkProps = {
  disabled?: boolean;
  secondary?: boolean;
  optional?: boolean;
};

/**
 * Component
 */
const Link = styled.a<LinkProps>(
  ({ secondary, optional, theme: { color, colorNew, opacity } }) => [
    {
      display: 'inline-block',
      padding: 0,
      font: 'inherit',
      color: color.piccolo[100],
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',
      textDecoration: 'none',
      '&:hover, &:focus, &:active': {
        color: color.piccolo[80],
      },
      ...disabled(opacity.disabled),
    },
    secondary && { color: colorNew.trunks },
    optional && {
      color: colorNew.trunks,
      '&:hover, &:focus, &:active, &.active': {
        color: color.bulma[100],
      },
    },
  ]
);

export type { LinkProps };

export default Link;
