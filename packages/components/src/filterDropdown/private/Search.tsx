import React, { ChangeEvent, useState } from 'react';
import { IconSearch } from '@heathmont/moon-assets';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

type SearchProps = {
  placeholder?: string;
  onChange: (value: string) => void;
};

const SearchWrapper = styled.div({
  position: 'relative',
});

const SearchInput = styled.input(({ theme }) => ({
  width: '100%',
  border: 'none',
  fontSize: rem(14),
  backgroundColor: 'transparent',
  color: theme.color.bulma[100],
  padding: `${rem(2)} ${rem(20)} ${rem(2)} 0`,
  caretColor: theme.color.piccolo[100],
  outline: 'none',
  '&::placeholder': {
    color: theme.color.trunks[100],
  },
}));

const Icon = styled(IconSearch as any)(({ theme }) => ({
  position: 'absolute',
  color: theme.color.trunks[100],
  width: rem(16),
  height: rem(16),
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
}));

const Search: React.FC<SearchProps> = ({ placeholder, onChange }) => {
  const [value, setValue] = useState('');

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
      />
      <Icon />
    </SearchWrapper>
  );
};

export default Search;
