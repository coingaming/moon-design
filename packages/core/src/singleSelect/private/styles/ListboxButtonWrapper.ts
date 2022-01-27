import { rem } from '@heathmont/moon-utils';
import { ListboxButton, ListboxButtonProps } from '@reach/listbox';
import styled from 'styled-components';

interface ListboxButtonWrapperProps extends ListboxButtonProps {
  disabled?: boolean;
  ref?: JSX.Element;
  inputsize?: 'small' | 'medium';
  isexpanded?: string;
  error?: string;
  variant?: 'primary' | 'secondary';
}

const ListboxButtonWrapper = styled(ListboxButton)<ListboxButtonWrapperProps>(
  ({
    theme: { colorNew, newTokens },
    disabled,
    isexpanded,
    inputsize,
    error,
    variant,
  }) => [
    {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colorNew.gohan,
      padding: inputsize === 'medium' ? rem(15) : `${rem(11)} ${rem(15)}`,
      boxShadow: `0 0 0 ${rem(1)} ${colorNew.beerus} inset`,
      borderRadius: newTokens.borderRadius.large,
      transition: `box-shadow ${newTokens.transition.default.joined}`,
      WebkitAppearance: 'none',
      cursor: 'pointer',
      '&:focus-visible, &:focus-visible ul': {
        outline: 'none',
      },
      '&:hover:enabled, &:focus:enabled': {
        cursor: 'pointer',
        boxShadow: `0 0 0 ${rem(2)} ${colorNew.piccolo} inset`,
      },
      '&:focus:not([disabled])': {
        outline: 'none',
        boxShadow: `0 0 0 ${rem(2)} ${colorNew.piccolo} inset`,
      },
      '&:hover:not(:focus):not([disabled])': {
        boxShadow: `0 0 0 ${rem(2)} ${colorNew.beerus} inset`,
      },
      '@supports (-moz-appearance:none)': {
        lineHeight: rem(24),
      },
    },
    variant === 'secondary' && {
      padding: `${rem(7)} ${rem(15)}`,
    },
    isexpanded && {
      boxShadow: `0 0 0 ${rem(2)} ${colorNew.piccolo} inset`,
      '&:hover:not(:focus):not([disabled])': {
        boxShadow: `0 0 0 ${rem(2)} ${colorNew.piccolo} inset`,
      },
      '& span[data-reach-listbox-arrow]': {
        transform: 'rotate(180deg)',
      },
    },
    error && {
      boxShadow: `0 0 0 ${rem(2)} ${colorNew.chiChi[100]} inset`,
      '&:focus:not([disabled])': {
        boxShadow: `0 0 0 ${rem(2)} ${colorNew.chiChi[100]} inset`,
      },
      '&:hover:not(:focus):not([disabled])': {
        boxShadow: `0 0 0 ${rem(2)} ${colorNew.chiChi[100]} inset`,
      },
    },
    disabled && {
      cursor: 'default',
    },
  ]
) as React.FC<ListboxButtonWrapperProps>;

export default ListboxButtonWrapper;
