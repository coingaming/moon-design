import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

import Popup from './private/components/Popup';
import { Results, SearchForm } from './private/components/Styles';
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
  isOpen?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: (e: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLElement>) => void;
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
  onKeyDown,
  onKeyUp,
  onSubmit,
  isOpen,
  placeholder,
  query = '',
  results,
  size = 'medium',
  ...props
}) => {
  const [searchStr, setSearchStr] = useState(query);
  const [isActive, setIsActive] = useState(isOpen || false);
  const search = useRef<HTMLInputElement>(null);

  useEffect(() => setIsActive(isOpen), [isOpen]);

  const debouncedOnChange = useCallback(
    debounce((e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
    }, 300),
    [onChange]
  );

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setSearchStr(e.target.value);
    debouncedOnChange(e);
  };

  const clearSearch = (e: React.MouseEvent<HTMLElement>) => {
    setSearchStr('');
    search.current && search.current.focus();
    onClear && onClear(e);
  };

  const openPopup = () => setIsActive(true);

  const closePopup = () => setIsActive(false);

  return (
    <Popup
      closeButton={closeButton}
      closePopup={closePopup}
      isActive={isActive}
      title={
        <SearchForm onSubmit={onSubmit} noValidate>
          <SearchBox $size={size}>
            <SearchInput
              $size={size}
              autoComplete="off"
              hasBorder={hasBorder}
              onChange={searchChange}
              onFocus={openPopup}
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              placeholder={placeholder}
              ref={search}
              required
              type="text"
              value={searchStr}
              {...props}
            />
            <SearchInputIcon $size={size} />
            {searchStr && (
              <SearchClearButton onClick={clearSearch} tabIndex="-1">
                <SearchClearIcon />
              </SearchClearButton>
            )}
            <input type="submit" hidden />
          </SearchBox>
        </SearchForm>
      }
    >
      {results && <Results>{results}</Results>}
    </Popup>
  );
};

export default Search;
