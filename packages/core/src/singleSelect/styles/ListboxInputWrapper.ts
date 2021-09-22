import { ListboxInput, ListboxInputProps } from '@reach/listbox';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import React from 'react';

interface ListboxInputWrapperProps extends ListboxInputProps {
  disabled?: boolean;
  ref?: any;
  inputSize?: 'small' | 'medium';
}

const ListboxInputWrapper = styled(ListboxInput)<ListboxInputWrapperProps>(
  ({
    theme: { color, borderWidth, radius, transitionDuration },
    disabled,
    inputSize,
  }) => [
    {
      width: '100%',
      maxWidth: '100%',
      fontSize: inputSize === 'medium' ? rem(14) : rem(16),
      lineHeight: rem(24),
      color: color.bulma[100],
      border: `${borderWidth}px solid ${color.beerus[100]}`,
      borderRadius: rem(radius.largest),
      transition: `border-color ${transitionDuration.default}s ease`,
      '&:focus, &:focus-visible': {
        outline: 'none',
      },
      '&:focus:not([disabled])': {
        outline: 'none',
        borderColor: color.piccolo[100],
      },
    },
    disabled && {
      opacity: 0.3,
      cursor: 'default',
    },
  ]
) as React.FC<ListboxInputWrapperProps>;

export default ListboxInputWrapper;
