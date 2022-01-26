import React from 'react';
import { rem } from '@heathmont/moon-utils';
import { ListboxList, ListboxOption } from '@reach/listbox';
import styled from 'styled-components';
import Option from '../private/OptionType';

interface OptionsProps {
  options: Option[];
  placeholderValue?: JSX.Element;
  selectedValue: string | null;
}

const ListboxListWrapper = styled(ListboxList)({
  listStyle: 'none',
  padding: `0 ${rem(4)}`,
  '&:focus-visible': {
    outline: 'none',
  },
  '&:focus:not([disabled])': {
    outline: 'none',
  },
});

const ListboxOptionWrapper = styled(ListboxOption)(
  ({ theme: { colorNew, newTokens } }) => ({
    cursor: 'pointer',
    borderRadius: newTokens.borderRadius.xsmall,
    '&:hover': {
      backgroundColor: colorNew.goku,
    },
  })
);

const Placeholder = styled(ListboxOption)({
  display: 'none',
});

const Options: React.FC<OptionsProps> = ({
  options,
  placeholderValue,
  selectedValue,
}) => (
  <ListboxListWrapper>
    {placeholderValue && (
      <Placeholder value="placeholder">{placeholderValue}</Placeholder>
    )}
    {options.map((option) => {
      const { value, label, element } = option;
      return (
        <ListboxOptionWrapper value={value} label={label} key={value}>
          {typeof element === 'function'
            ? element({ isSelected: value === selectedValue })
            : element}
        </ListboxOptionWrapper>
      );
    })}
  </ListboxListWrapper>
);

export default Options;
