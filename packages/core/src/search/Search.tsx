import React, { useRef, useState } from 'react';

import Popup from './private/components/Popup';
import { Result, SearchResults } from './private/components/SearchResults';
import { SearchForm } from './private/components/Form';
import {
  SearchInput,
  SearchInputIcon,
  SearchClearIcon,
  SearchBox,
} from './private/components/Input';

interface SearchProps {
  buttonText?: string;
  loadingMessage?: JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder?: string;
  query?: string;
  results?: Result;
  showButton?: boolean;
  size?: 'small' | 'medium';
  tabs?: Result;
}

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
  tabs,
  ...props
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [searchStr, setSearchStr] = useState(query);
  const search = useRef(null);

  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
    onChange && onChange(e);
  };

  const clearSearch = () => {
    console.log('clearSearch');
    setSearchStr('');
  };

  const closePopup = () => {
    console.log('close popup');
    setPopupOpen(false);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  return (
    <Popup
      isOpen={popupOpen}
      closePopup={closePopup}
      title={
        <SearchForm onSubmit={onSubmit}>
          <SearchBox size={size}>
            <SearchInput
              autoComplete="off"
              onChange={searchChange}
              onFocus={openPopup}
              placeholder={placeholder}
              ref={search}
              required
              type="text"
              value={searchStr}
              {...props}
            />
            <SearchInputIcon />
            {searchStr && (
              <button onClick={clearSearch}>
                <SearchClearIcon />
              </button>
            )}
            <input type="submit" hidden />
          </SearchBox>
        </SearchForm>
      }
    >
      <>
        {popupOpen && (results || loadingMessage || tabs) && (
          <SearchResults {...{ results, loadingMessage, size, tabs }} />
        )}
      </>
    </Popup>
  );
};

export default Search;
