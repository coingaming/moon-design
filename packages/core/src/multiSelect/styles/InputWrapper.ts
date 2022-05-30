import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

interface InputWrapperProps {
  isExpandedInner: boolean | undefined;
  disabled: boolean | undefined;
  error: boolean | undefined;
  onClick: () => void;
  children?: React.ReactNode;
}

const InputWrapper = styled.div<InputWrapperProps>(
  ({ theme, isExpandedInner, disabled, error }) => [
    {
      minHeight: rem(56),
      width: '100%',
      maxWidth: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.colorNew.gohan,
      border: `${rem(1)} solid`,
      borderColor: theme.colorNew.gohan,
      borderRadius: rem(9999),
      padding: `${rem(8)} ${rem(13)} ${rem(6)}`,
      cursor: 'pointer',
      transition: `border-color ${theme.newTokens.transition.default}`,
      WebkitAppearance: 'none',
      '&:hover:not(:active)': {
        borderColor: theme.colorNew.beerus,
      },
      '&:active': {
        borderColor: theme.colorNew.piccolo,
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
        borderColor: theme.colorNew.beerus,
        '&:hover:not(:active)': {
          borderColor: theme.colorNew.beerus,
        },
        '&:active': {
          borderColor: theme.colorNew.piccolo,
        },
        borderRadius: rem(9999),
        transition: `border-color ${theme.newTokens.transition.default}`,
        WebkitAppearance: 'none',
      },
    },
    isExpandedInner && {
      borderColor: theme.colorNew.piccolo,
      '&:hover:not(:active)': {
        borderColor: theme.colorNew.piccolo,
      },
      '&::after': {
        borderColor: theme.colorNew.piccolo,
        '&:hover:not(:active)': {
          borderColor: theme.colorNew.piccolo,
        },
      },
    },
    disabled && {
      opacity: 0.3,
      cursor: 'default',
      '&:hover:not(:active)': {
        borderColor: theme.colorNew.gohan,
      },
      '&:active': {
        borderColor: theme.colorNew.gohan,
      },
      '&::after': {
        '&:hover:not(:active)': {
          borderColor: theme.colorNew.beerus,
        },
        '&:active': {
          borderColor: theme.colorNew.beerus,
        },
      },
    },
    error && {
      borderColor: theme.colorNew.chiChi[100],
      '&:hover:not(:active)': {
        borderColor: theme.colorNew.chiChi[100],
      },
      '&:active': {
        borderColor: theme.colorNew.chiChi[100],
      },
      '&::after': {
        borderColor: theme.colorNew.chiChi[100],
        '&:hover:not(:active)': {
          borderColor: theme.colorNew.chiChi[100],
        },
        '&:active': {
          borderColor: theme.colorNew.chiChi[100],
        },
      },
    },
  ]
) as React.FC<InputWrapperProps>;

export default InputWrapper;
