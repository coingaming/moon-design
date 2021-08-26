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
  onClear?: () => void;
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
  const [popupOpen, setPopupOpen] = useState(false);
  const [searchStr, setSearchStr] = useState(query);
  const search = useRef(null);

  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
    onChange && onChange(e);
  };

  const clearSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setSearchStr('');
    onClear && onClear();
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  return (
    <Popup
      closeButton={closeButton}
      closePopup={closePopup}
      isOpen={popupOpen}
      title={
        <SearchForm onSubmit={onSubmit}>
          <SearchBox $size={size}>
            <SearchInput
              $size={size}
              autoComplete="off"
              hasBorder={hasBorder}
              onChange={searchChange}
              onFocus={openPopup}
              placeholder={placeholder}
              ref={search}
              required
              type="text"
              value={searchStr}
              {...props}
            />
            <SearchInputIcon $size={size} />
            {searchStr && popupOpen && (
              <SearchClearButton onClick={clearSearch}>
                <SearchClearIcon />
              </SearchClearButton>
            )}
            <input type="submit" hidden />
          </SearchBox>
        </SearchForm>
      }
    >
      <>
        {popupOpen && results && (
          <SearchResults results={results} />
        )}
      </>
    </Popup>
  );
};

export default Search;
