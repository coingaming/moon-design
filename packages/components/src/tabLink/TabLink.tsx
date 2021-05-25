import styled from 'styled-components';
import rem from 'polished/lib/helpers/rem';

import { underlineWidth, underlineOffset } from '../tabs/private';

type TabLinkProps = {
  fullWidth?: boolean;
};

const TabLink = styled.a<TabLinkProps>(({ theme, fullWidth }) => [
  fullWidth && {
    display: 'flex',
    flex: 'auto',
    justifyContent: 'center',
  },
  {
    position: 'relative',
    padding: 0,
    paddingBottom: `${underlineOffset(theme)}px`,
    margin: 0,
    fontSize: rem(14),
    lineHeight: 1.3,
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    color: theme.color.trunks[100],
    transition: `color ${theme.transitionDuration.default}s ease`,
    textDecoration: 'none',
    border: 0,
    appearance: 'none',
    '&:after': {
      content: '""',
      position: 'absolute',
      height: `${underlineWidth(theme)}px`,
      width: '100%',
      left: 0,
      right: 0,
      bottom: 0,
      margin: '0 auto',
      backgroundColor: theme.color.piccolo[100],
      transform: 'scaleX(0)',
      transition: `transform ${theme.transitionDuration.default}s ease`,
    },
    '&:hover, &:focus, &:active, &.active, &[aria-current=page]': {
      color: theme.color.bulma[100],
      cursor: 'pointer',
      '&:after': {
        transform: 'scaleX(1)',
      },
    },
  },
]);

export default TabLink;
