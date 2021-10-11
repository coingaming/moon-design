import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import { ListboxButton, ListboxButtonProps } from '@reach/listbox';

interface ListboxButtonWrapperProps extends ListboxButtonProps {
  disabled?: boolean;
  ref?: any;
  inputsize?: 'small' | 'medium';
  isexpanded?: string;
  error?: string;
  variant?: 'primary' | 'secondary';
}

const ListboxButtonWrapper = styled(ListboxButton)<ListboxButtonWrapperProps>(
  ({
    theme: { border, color, radius, transitionDuration },
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
      backgroundColor: color.gohan[100],
      padding: inputsize === 'medium' ? rem(15) : `${rem(11)} ${rem(15)}`,
      border: border,
      borderColor: color.gohan[100],
      borderRadius: rem(radius.largest),
      transition: `border-color ${transitionDuration.default}s ease`,
      WebkitAppearance: 'none',
      cursor: 'pointer',

      '&:focus-visible, &:focus-visible ul': {
        outline: 'none',
      },
      '&:hover:enabled, &:focus:enabled': {
        cursor: 'pointer',
        borderColor: color.piccolo[100],
      },
      '&:focus:not([disabled])': {
        outline: 'none',
        borderColor: color.piccolo[100],
      },
      '&:hover:not(:focus):not([disabled])': {
        borderColor: color.beerus[100],
      },
      '@supports (-moz-appearance:none)': {
        lineHeight: rem(24),
      },
    },
    variant === 'secondary' && {
      padding: `${rem(7)} ${rem(15)}`,
    },
    isexpanded && {
      borderColor: color.piccolo[100],
      '&:hover:not(:focus):not([disabled])': {
        borderColor: color.piccolo[100],
      },
      '& span[data-reach-listbox-arrow]': {
        transform: 'rotate(180deg)',
      },
    },
    error && {
      borderColor: color.chiChi[100],
      '&:focus:not([disabled])': {
        borderColor: color.chiChi[100],
      },
      '&:hover:not(:focus):not([disabled])': {
        borderColor: color.chiChi[100],
      },
    },
    disabled && {
      cursor: 'default',
    },
  ]
) as React.FC<ListboxButtonWrapperProps>;

export default ListboxButtonWrapper;
