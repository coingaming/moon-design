import React, { useRef, useState } from 'react';

import Popup from './private/components/Popup';
import { SearchResults } from './private/components/SearchResults';
import { SearchForm } from './private/components/Styles';
import {
  SearchBox,
  SearchClearButton,
  SearchClearIcon,
  SearchInput,
  SearchInputIcon,
  SearchInputSize,
} from './private/components/Input';

export interface SearchProps {
  closeButton?: JSX.Element;
  hasBorder?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: (e: React.MouseEvent<HTMLElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder?: string;
  query?: string;
  results?: JSX.Element;
  size?: SearchInputSize;
}

const Search: React.FC<SearchProps> = ({
  closeButton,
  hasBorder = true,
  onChange,
  onClear,
  onSubmit,
  placeholder,
  query = '',
  results,
  size = 'medium',
  ...props
}) => {
  const [searchStr, setSearchStr] = useState(query);
  const search = useRef<HTMLInputElement>(null);

  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
    onChange && onChange(e);
  };

  const clearSearch = (e: React.MouseEvent<HTMLElement>) => {
    setSearchStr('');
    search.current && search.current.focus();
    onClear && onClear(e);
  };

  const closePopup = () => {
    if (search.current) {
      search.current.focus();
      search.current.blur();
    }
  };

  return (
    <Popup
      closeButton={closeButton}
      closePopup={closePopup}
      title={
        <SearchForm onSubmit={onSubmit}>
          <SearchBox $size={size}>
            <SearchInput
              $size={size}
              autoComplete="off"
              hasBorder={hasBorder}
              onChange={searchChange}
              placeholder={placeholder}
              ref={search}
              required
              type="text"
              value={searchStr}
              {...props}
            />
            <SearchInputIcon $size={size} />
            {searchStr && (
              <SearchClearButton onClick={clearSearch}>
                <SearchClearIcon />
              </SearchClearButton>
            )}
            <input type="submit" hidden />
          </SearchBox>
        </SearchForm>
      }
    >
      {results && <SearchResults results={results} />}
    </Popup>
  );
};

export default Search;
