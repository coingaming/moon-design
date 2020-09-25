import { IconChevronDownRounded } from '@heathmont/moon-assets';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

export const TagInputWrapper = styled.div({
  position: 'relative',
});

export const TagInputMain = styled.div<{ focused?: boolean; error?: boolean }>(
  ({ theme }) => [
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
      borderRadius: rem(12),
      transition: `border-color ${theme.transitionDuration.default}s ease`,
      '&:hover': {
        borderColor: theme.color.goku[40],
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
        '&:hover': {
          borderColor: theme.color.chiChi[100],
        },
      },
  ]
);

export const TagInputField = styled.input(({ theme }) => ({
  fontSize: rem(16),
  border: 'none',
  background: 'none',
  outline: 'none',
  caretColor: theme.color.piccolo[100],
  color: theme.color.bulma[100],
  minWidth: rem(50),
  margin: `0 0 ${rem(4)} 0`,
  flex: 1,
  '&::placeholder': {
    color: theme.color.trunks[100],
    opacity: 1,
  },
}));

export const Tag = styled.div(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: theme.color.goku[100],
  borderRadius: rem(8),
  padding: rem(8),
  color: theme.color.piccolo[100],
  fontSize: rem(12),
  height: rem(32),
  fontWeight: theme.fontWeight.semibold,
  margin: `0 ${rem(4)} ${rem(4)} 0`,
  position: 'relative',
}));

export const TagRemove = styled.button(({ theme }) => ({
  appearance: 'none',
  background: 'none',
  border: 'none',
  padding: 0,
  fontSize: rem(16),
  display: 'inline-flex',
  alignItems: 'center',
  color: theme.color.piccolo[100],
  cursor: 'pointer',
  marginLeft: rem(4),
  transition: `color ${theme.transitionDuration.default}s ease-in-out`,
  '&:hover, &:focus': {
    color: theme.color.chiChi[100],
  },
}));

export const IconDropdown = styled(IconChevronDownRounded as any)(
  ({ theme }) => ({
    position: 'absolute',
    top: '50%',
    right: rem(18),
    fontSize: rem(12),
    transform: 'translateY(-50%)',
    color: theme.color.trunks[100],
  })
);

export const RemoveAllButton = styled.button(({ theme }) => ({
  background: 'none',
  border: 'none',
  padding: 0,
  fontSize: rem(24),
  color: theme.color.trunks[100],
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  right: rem(12),
  transform: 'translateY(-50%)',
  transition: `color ${theme.transitionDuration.default}s ease-in-out`,
  '&:hover, &:focus': {
    color: theme.color.piccolo[100],
  },
}));

export const DropdownWrapper = styled.div({
  top: '100%',
  left: 0,
  position: 'absolute',
  marginTop: rem(10),
  maxWidth: '100%',
});
