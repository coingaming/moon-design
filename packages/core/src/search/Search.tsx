import React, { useRef, useState } from 'react';

import { SearchForm } from './private/components/Form';
import { SearchInput, SearchInputIcon, SearchClearIcon, SearchBox, SearchCloseButton } from './private/components/Input';
import { SearchResults, SearchResultTypes } from './private/components/SearchResults';

export type SearchProps = {
  buttonText?: string,
  loadingMessage?: JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder?: string;
  query?: string;
  searchResults?: SearchResultTypes;
  showButton?: boolean,
  suurus?: 'small' | 'medium',
} & React.InputHTMLAttributes<HTMLInputElement>;

const Search: React.FC<SearchProps> = ({
  buttonText = 'Clear',
  loadingMessage,
  onChange,
  onSubmit,
  placeholder,
  query = '',
  searchResults,
  showButton = true,
  suurus,
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
      <SearchBox suurus={suurus}>
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
        {(searchResults || loadingMessage) && (
          <SearchResults loadingMessage={loadingMessage} searchResults={searchResults} />
        )}
        <input type="submit" hidden />
      </SearchBox>
      {showButton && <SearchCloseButton>{buttonText}</SearchCloseButton>}
    </SearchForm>
  );
}

export default Search;
