import React, { useRef, useState } from 'react';

import { SearchForm } from './private/components/Form';
import { SearchInput, SearchInputIcon, SearchClearIcon, SearchBox, SearchCloseButton } from './private/components/Input';
import { SearchResults } from './private/components/SearchResults';

interface Result {
  title: JSX.Element;
  items?: [JSX.Element];
}

export type SearchProps = {
  buttonText?: string,
  loadingMessage?: JSX.Element;
  onChange?: (e: React.FormEvent<HTMLFormElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder?: string;
  query?: string;
  results?: [Result];
  showButton?: boolean,
  size?: 'small' | 'medium',
} & React.InputHTMLAttributes<HTMLInputElement>;

const Search: React.FC<SearchProps> = ({
  buttonText = 'Clear',
  loadingMessage,
  onChange,
  onSubmit,
  placeholder,
  query = '',
  results,
  showButton = true,
  size,
  ...props
}) => {
  const [searchStr, setSearchStr] = useState(query);
  const search = useRef(null);

  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
    onChange && onChange(e);
  }

  const clearSearch = () => {
    setSearchStr('');
  }

  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchBox size={size}>
        <SearchInput
          autoComplete="off"
          onChange={searchChange}
          placeholder={placeholder}
          required
          type="text"
          value={searchStr}
          ref={search}
          {...props}
        />
        <SearchInputIcon />
        {searchStr && <button type="reset" onClick={clearSearch}><SearchClearIcon /></button>}
        {(results || loadingMessage) && (
          <SearchResults loadingMessage={loadingMessage} results={results} />
        )}
        <input type="submit" hidden />
      </SearchBox>
      {showButton && <SearchCloseButton>{buttonText}</SearchCloseButton>}
    </SearchForm>
  );
}

export default Search;
