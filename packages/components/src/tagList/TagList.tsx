import { rem } from '@heathmont/moon-utils';
import { IconCopy } from '@heathmont/moon-assets';
import styled from 'styled-components';

import Bubble from '../bubble/Bubble';
import { Tag } from '../tagInput/TagInput';

export const CopyBubble = styled(Bubble as any)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  right: 0,
  pointerEvents: 'none',
  transition: `opacity ${theme.transitionDuration.default}s ease-in-out`,
  opacity: 0,
  marginTop: rem(16),
  marginRight: rem(-8),
}));

export const TagListWrapper = styled.div(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  [Tag]: {
    color: theme.color.bulma[100],
  },
}));

export const TagListInternal = styled.div({
  [Tag]: {
    marginRight: rem(4),
    '&:last-child': {
      marginRight: 0,
    },
  },
});

export const ShowMore = styled.button(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: theme.color.goku[100],
  borderRadius: rem(8),
  padding: rem(8),
  color: theme.color.bulma[100],
  fontSize: rem(12),
  height: rem(32),
  fontWeight: theme.fontWeight.normal,
  position: 'relative',
  cursor: 'pointer',
  border: 'none',
  transition: `color ${theme.transitionDuration.default}s ease, background-color ${theme.transitionDuration.default}s ease`,
  '&:hover, &:focus': {
    color: theme.color.goten[100],
    backgroundColor: theme.color.piccolo[100],
  },
}));

export const Dropdown = styled.div(({ theme }) => ({
  background: theme.color.goten[100],
  borderRadius: theme.radius.default,
  boxShadow: theme.boxShadow,
  position: 'absolute',
  top: '50%',
  left: rem(-16),
  width: `calc(100% + ${rem(32)})`,
  transform: 'translateY(-50%)',
  padding: `${rem(8)} ${rem(44)} ${rem(4)} ${rem(12)}`,
  minWidth: rem(280),
  [Tag]: {
    margin: `0 ${rem(4)} ${rem(4)} 0`,
  },
}));

export const CopyWrapper = styled.div({
  position: 'absolute',
  top: rem(8),
  right: rem(12),
});

export const CopyButton = styled.button(({ theme }) => ({
  height: rem(24),
  width: rem(24),
  border: 'none',
  background: 'none',
  outline: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  [IconCopy]: {
    height: rem(16),
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    transitionDuration: `${theme.transitionDuration.default}s`,
    transitionTimingFunction: 'ease',
    backgroundColor: theme.color.piccolo[100],
    borderRadius: '50%',
    opacity: 0,
    transform: 'none',
    transitionProperty: 'transform, opacity',
  },

  '&:hover, &:focus': {
    [CopyBubble]: {
      opacity: 1,
    },
    [IconCopy]: {
      color: theme.color.piccolo[100],
    },
    '&::before': {
      transform: 'scale(1.4)',
      opacity: 0.1,
    },
  },
}));

export default {
  CopyBubble,
  TagListWrapper,
  TagListInternal,
  ShowMore,
  Dropdown,
  CopyWrapper,
  CopyButton,
};
