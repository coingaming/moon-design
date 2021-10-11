import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const InputWrapper = styled.div<{
  isExpandedInner: boolean;
  disabled: boolean;
  error: boolean;
}>(({ theme, isExpandedInner, disabled, error }) => [
  {
    minHeight: rem(56),
    width: '100%',
    maxWidth: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.color.gohan[100],
    border: `${rem(1)} solid`,
    borderColor: theme.color.gohan[100],
    borderRadius: rem(theme.radius.largest),
    padding: `${rem(8)} ${rem(13)} ${rem(6)}`,
    cursor: 'pointer',
    transition: `border-color ${theme.transitionDuration.default}s ease`,
    WebkitAppearance: 'none',
    '&:hover:not(:active)': {
      borderColor: theme.color.beerus[100],
    },
    '&:active': {
      borderColor: theme.color.piccolo[100],
    },
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: rem(-2),
      left: rem(-2),
      right: rem(-2),
      bottom: rem(-2),
      border: `${rem(1)} solid`,
      borderColor: theme.color.beerus[100],
      '&:hover:not(:active)': {
        borderColor: theme.color.beerus[100],
      },
      '&:active': {
        borderColor: theme.color.piccolo[100],
      },
      borderRadius: rem(theme.radius.largest),
      transition: `border-color ${theme.transitionDuration.default}s ease`,
      WebkitAppearance: 'none',
    },
  },
  isExpandedInner && {
    borderColor: theme.color.piccolo[100],
    '&:hover:not(:active)': {
      borderColor: theme.color.piccolo[100],
    },
    '&::after': {
      borderColor: theme.color.piccolo[100],
      '&:hover:not(:active)': {
        borderColor: theme.color.piccolo[100],
      },
    },
  },
  disabled && {
    opacity: 0.3,
    cursor: 'default',
    '&:hover:not(:active)': {
      borderColor: theme.color.gohan[100],
    },
    '&:active': {
      borderColor: theme.color.gohan[100],
    },
    '&::after': {
      '&:hover:not(:active)': {
        borderColor: theme.color.beerus[100],
      },
      '&:active': {
        borderColor: theme.color.beerus[100],
      },
    },
  },
  error && {
    borderColor: theme.color.chiChi[100],
    '&:hover:not(:active)': {
      borderColor: theme.color.chiChi[100],
    },
    '&:active': {
      borderColor: theme.color.chiChi[100],
    },
    '&::after': {
      borderColor: theme.color.chiChi[100],
      '&:hover:not(:active)': {
        borderColor: theme.color.chiChi[100],
      },
      '&:active': {
        borderColor: theme.color.chiChi[100],
      },
    },
  },
]) as React.FC<any>;

export default InputWrapper;
