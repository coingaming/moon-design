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
  ({ theme: { colorNew, newTokens }, disabled, inputsize }) => [
    {
      width: '100%',
      maxWidth: '100%',
      fontSize: inputsize === 'medium' ? rem(14) : rem(16),
      lineHeight: rem(24),
      color: colorNew.bulma,
      borderRadius: newTokens.borderRadius.large,
      '&:focus, &:focus-visible': {
        outline: 'none',
      },
      '&:focus:not([disabled])': {
        outline: 'none',
      },
      '&[data-value="placeholder"]': {
        color: colorNew.trunks,
      },
    },
    disabled && {
      opacity: 0.3,
      cursor: 'default',
    },
  ]
) as React.FC<ListboxInputWrapperProps>;

export default ListboxInputWrapper;
