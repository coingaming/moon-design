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
    theme: { border, colorNew, radius, transitionDuration },
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
      border: border,
      borderColor: colorNew.gohan,
      borderRadius: rem(radius.largest),
      transition: `border-color ${transitionDuration.default}s ease`,
      WebkitAppearance: 'none',
      cursor: 'pointer',

      '&:focus-visible, &:focus-visible ul': {
        outline: 'none',
      },
      '&:hover:enabled, &:focus:enabled': {
        cursor: 'pointer',
        borderColor: colorNew.piccolo,
      },
      '&:focus:not([disabled])': {
        outline: 'none',
        borderColor: colorNew.piccolo,
      },
      '&:hover:not(:focus):not([disabled])': {
        borderColor: colorNew.beerus,
      },
      '@supports (-moz-appearance:none)': {
        lineHeight: rem(24),
      },
    },
    variant === 'secondary' && {
      padding: `${rem(7)} ${rem(15)}`,
    },
    isexpanded && {
      borderColor: colorNew.piccolo,
      '&:hover:not(:focus):not([disabled])': {
        borderColor: colorNew.piccolo,
      },
      '& span[data-reach-listbox-arrow]': {
        transform: 'rotate(180deg)',
      },
    },
    error && {
      borderColor: colorNew.chiChi[100],
      '&:focus:not([disabled])': {
        borderColor: colorNew.chiChi[100],
      },
      '&:hover:not(:focus):not([disabled])': {
        borderColor: colorNew.chiChi[100],
      },
    },
    disabled && {
      cursor: 'default',
    },
  ]
) as React.FC<ListboxButtonWrapperProps>;

export default ListboxButtonWrapper;
