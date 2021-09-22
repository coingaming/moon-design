import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import { ListboxList, ListboxOption } from '@reach/listbox';
import Option from '../private/OptionType';

interface OptionsProps {
  options: Option[];
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
    backgroundColor: color.hit[80],
  },
}));

const Options: React.FC<OptionsProps> = ({ options }) => (
  <ListboxListWrapper>
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
