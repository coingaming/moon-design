import React, { useRef, useState } from 'react';

import Popup from './private/components/Popup';
import {
  Result,
  SearchInputSize,
  SearchResults,
} from './private/components/SearchResults';
import { SearchForm } from './private/components/Form';
import {
  SearchBox,
  SearchClearIcon,
  SearchInput,
  SearchInputIcon,
} from './private/components/Input';

interface SearchProps {
  closeButton?: JSX.Element;
  loadingMessage?: JSX.Element;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder?: string;
  query?: string;
  results?: Result;
  showButton?: boolean;
  size?: SearchInputSize;
  tabs?: Result;
}

const Search: React.FC<SearchProps> = ({
  closeButton,
  loadingMessage,
  onChange,
  onSubmit,
  placeholder,
  query = '',
  results,
  showButton = true,
  size = 'medium',
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

  const clearSearch = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setSearchStr('');
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
          <SearchBox size={size}>
            <SearchInput
              autoComplete="off"
              inputSize={size}
              onChange={searchChange}
              onFocus={openPopup}
              placeholder={placeholder}
              ref={search}
              required
              type="text"
              value={searchStr}
              {...props}
            />
            <SearchInputIcon inputSize={size} />
            {searchStr && popupOpen && (
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
