import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import { ListboxList, ListboxOption } from '@reach/listbox';
import Option from '../private/OptionType';

interface OptionsProps {
  options: Option[];
  placeholderValue?: JSX.Element;
}

const ListboxListWrapper = styled(ListboxList)({
  padding: `0 ${rem(4)}`,
  '&:focus-visible': {
    outline: 'none',
  },
  '&:focus:not([disabled])': {
    outline: 'none',
  },
});

const ListboxOptionWrapper = styled(ListboxOption)(({ theme: { color } }) => ({
  cursor: 'pointer',
  borderRadius: rem(4),
  '&:hover': {
    backgroundColor: color.goku[100],
  },
}));

const Placeholder = styled(ListboxOption)({
  display: 'none',
});

const Options: React.FC<OptionsProps> = ({ options, placeholderValue }) => (
  <ListboxListWrapper>
    {placeholderValue && (
      <Placeholder value="placeholder">{placeholderValue}</Placeholder>
    )}
    {options.map((option) => {
      const { value, label, element } = option;
      return (
        <ListboxOptionWrapper value={value} label={label} key={value}>
          {element}
        </ListboxOptionWrapper>
      );
    })}
  </ListboxListWrapper>
);

export default Options;
