import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Bubble from '../bubble/Bubble';

export const RemoveBubble = styled(Bubble as any)(({ theme }) => ({
  position: 'absolute',
  bottom: '100%',
  right: 0,
  pointerEvents: 'none',
  transition: `opacity ${theme.transitionDuration.default}s ease-in-out`,
  opacity: 0,
  width: 'auto',
}));

export const Tag = styled.div(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: theme.color.goku[100],
  borderRadius: rem(8),
  padding: rem(8),
  color: theme.color.bulma[100],
  fontSize: rem(12),
  minHeight: rem(30),
  fontWeight: theme.fontWeight.normal,
  position: 'relative',
  gap: rem(6),
}));

export const TagInputField = styled.input(({ theme }) => ({
  fontSize: rem(16),
  border: 'none',
  background: 'none',
  outline: 'none',
  caretColor: theme.color.piccolo[100],
  color: theme.color.bulma[100],
  minWidth: rem(52),
  margin: `0 0 ${rem(4)} 0`,
  flex: 1,
  '&::placeholder': {
    color: theme.colorNew.trunks,
    opacity: 1,
  },
}));

export const TagInputWrapper = styled.div({
  position: 'relative',
});

export const TagInputMain = styled.div<{
  focused?: boolean;
  error?: boolean;
  disabled?: boolean;
}>(({ theme }) => [
  {
    display: 'flex',
    width: '100%',
    minHeight: rem(48),
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    position: 'relative',
    padding: `${rem(8)} ${rem(40)} ${rem(4)} ${rem(12)}`,
    backgroundColor: theme.color.gohan[100],
    border: `${theme.borderWidth}px solid ${theme.color.beerus[100]}`,
    borderRadius: rem(theme.radius.default),
    transition: `border-color ${theme.transitionDuration.default}s ease`,
    '&:hover': {
      borderColor: theme.color.goku[40],
    },
    '&:focus-within': {
      borderColor: theme.color.piccolo[100],
    },
    [Tag]: {
      margin: `0 ${rem(4)} ${rem(4)} 0`,
    },
  },
  ({ focused }) =>
    focused && {
      borderColor: theme.color.piccolo[100],
      '&:hover': {
        borderColor: theme.color.piccolo[100],
      },
    },
  ({ error }) =>
    error && {
      borderColor: theme.color.chiChi[100],
      '&:focus-within, &:hover': {
        borderColor: theme.color.chiChi[100],
      },
    },
  ({ disabled }) =>
    disabled && {
      opacity: 0.5,
      cursor: 'not-allowed',
      [TagInputField]: {
        cursor: 'not-allowed',
      },
    },
]);

export const TagRemove = styled.button(({ theme }) => ({
  appearance: 'none',
  background: 'none',
  border: 'none',
  padding: 0,
  fontSize: rem(16),
  display: 'inline-flex',
  alignItems: 'center',
  color: theme.colorNew.trunks,
  cursor: 'pointer',
  transition: `color ${theme.transitionDuration.default}s ease-in-out`,
  position: 'relative',
  outline: 'none',
  [RemoveBubble]: {
    marginRight: rem(-12),
    marginBottom: rem(18),
  },
  '&:hover, &:focus': {
    color: theme.color.chiChi[100],
    [RemoveBubble]: {
      opacity: 1,
    },
  },
}));

export const ArrowContainer = styled.div(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: rem(18),
  fontSize: rem(16),
  transform: 'translateY(-50%)',
  color: theme.colorNew.trunks,
}));

export const RemoveAllButton = styled.button(({ theme }) => ({
  background: 'none',
  border: 'none',
  padding: 0,
  fontSize: rem(16),
  color: theme.colorNew.trunks,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: rem(16),
  right: rem(16),
  transition: `color ${theme.transitionDuration.default}s ease-in-out`,
  outline: 'none',
  whiteSpace: 'nowrap',
  [RemoveBubble]: {
    marginRight: rem(-12),
    marginBottom: rem(24),
  },
  '&:hover, &:focus': {
    color: theme.color.piccolo[100],
    [RemoveBubble]: {
      opacity: 1,
    },
  },
}));

export const DropdownWrapper = styled.div({
  top: '100%',
  left: 0,
  position: 'absolute',
  marginTop: rem(10),
  maxWidth: '100%',
});

export default {
  RemoveBubble,
  Tag,
  TagInputWrapper,
  TagInputMain,
  TagInputField,
  TagRemove,
  ArrowContainer,
  RemoveAllButton,
  DropdownWrapper,
};
