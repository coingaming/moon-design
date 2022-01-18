import React, { Ref } from 'react';
import { rem } from '@heathmont/moon-utils';
import { ListboxInput, ListboxInputProps } from '@reach/listbox';
import styled from 'styled-components';

interface ListboxInputWrapperProps extends ListboxInputProps {
  disabled?: boolean;
  ref?: Ref<HTMLSelectElement>;
  inputsize?: 'small' | 'medium';
  error?: string;
}

const ListboxInputWrapper = styled(ListboxInput)<ListboxInputWrapperProps>(
  ({
    theme: { color, colorNew, borderWidth, radius, transitionDuration },
    disabled,
    inputsize,
    error,
  }) => [
    {
      width: '100%',
      maxWidth: '100%',
      fontSize: inputsize === 'medium' ? rem(14) : rem(16),
      lineHeight: rem(24),
      color: colorNew.bulma,
      border: `${borderWidth}px solid`,
      borderColor: colorNew.beerus,
      borderRadius: rem(radius.largest),
      transition: `border-color ${transitionDuration.default}s ease`,
      '&:focus, &:focus-visible': {
        outline: 'none',
      },
      '&:focus:not([disabled])': {
        outline: 'none',
        borderColor: color.piccolo[100],
      },
      '&[data-value="placeholder"]': {
        color: colorNew.trunks,
      },
      '&[data-state="expanded"]': {
        borderColor: color.piccolo[100],
      },
    },
    error && {
      borderColor: color.chiChi[100],
      '&:focus:not([disabled])': {
        borderColor: color.chiChi[100],
      },
      '&[data-state="expanded"]': {
        borderColor: color.chiChi[100],
      },
    },
    disabled && {
      opacity: 0.3,
      cursor: 'default',
    },
  ]
) as React.FC<ListboxInputWrapperProps>;

export default ListboxInputWrapper;
