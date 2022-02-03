import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { debounce } from 'lodash';
import {
  SearchBox,
  SearchClearButton,
  SearchClearIcon,
  SearchInput,
  SearchInputIcon,
  SearchInputSize,
} from './private/components/Input';
import Popup from './private/components/Popup';
import { Results, SearchForm } from './private/components/Styles';

export interface SearchProps {
  closeButton?: JSX.Element;
  hasBorder?: boolean;
  isOpen?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: (e: React.MouseEvent<HTMLElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
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
  isOpen = false,
  onBlur,
  onChange,
  onClear,
  onFocus,
  onKeyDown,
  onKeyUp,
  onSubmit,
  placeholder,
  query = '',
  results,
  size = 'medium',
  ...props
}) => {
  const [searchStr, setSearchStr] = useState(query);
  const [isActive, setIsActive] = useState(isOpen);
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

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    openPopup();
    onFocus && onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) =>
    onBlur && onBlur(e);

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
              onBlur={handleBlur}
              onChange={searchChange}
              onFocus={handleFocus}
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
            <input type="submidt" hidden />
          </SearchBox>
        </SearchForm>
      }
    >
      {results && <Results>{results}</Results>}
    </Popup>
  );
};

export default Search;
