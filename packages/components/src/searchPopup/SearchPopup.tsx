import React, { useState } from 'react';

import Popup from './private/components/Popup';
import { SearchForm } from './private/components/Form';
import { SearchInput, SearchInputIcon } from './private/components/Input';
import { SearchResults } from './private/components/SearchResults';

export type SearchPopupProps = {
  closeButtonText?: string;
  loadingMessage?: JSX.Element;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder?: string;
  query?: string;
  results?: [JSX.Element];
} & React.InputHTMLAttributes<HTMLInputElement>;

const SearchPopup: React.FC<SearchPopupProps> = ({
  closeButtonText = "Sulge",
  loadingMessage,
  onChange,
  onSubmit,
  placeholder,
  query,
  results,
  ...props
}) => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <Popup
      isOpen={popupOpen}
      closePopup={() => setPopupOpen(false)}
      title={
        <SearchForm onSubmit={onSubmit}>
          <SearchInput
            value={query}
            placeholder={placeholder}
            type="text"
            autoComplete="off"
            required
            onChange={onChange}
            onFocus={() => setPopupOpen(true)}
            {...props}
          />
          <SearchInputIcon />
          <input type="submit" hidden />
        </SearchForm>
        }
      >
        {(results || loadingMessage) && (
          <SearchResults loadingMessage={loadingMessage} results={results} />
        )}
    </Popup>
  );
}

export default SearchPopup;
