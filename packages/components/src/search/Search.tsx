import React from 'react';

import { SearchForm } from './private/components/Form';
import { SearchInput, SearchInputIcon } from './private/components/Input';
import { SearchResults } from './private/components/SearchResults';

interface Result {
  title: JSX.Element;
  items?: [JSX.Element];
}

export type SearchProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  query?: string;
  results?: [Result];
  loadingMessage?: JSX.Element;
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Search: React.FC<SearchProps> = ({
  query,
  placeholder,
  onSubmit,
  onChange,
  results,
  loadingMessage,
  ...props
}) => (
  <SearchForm onSubmit={onSubmit}>
    <SearchInput
      value={query}
      placeholder={placeholder}
      type="text"
      autoComplete="off"
      required
      onChange={onChange}
      {...props}
    />
    <SearchInputIcon />
    {(results || loadingMessage) && (
      <SearchResults loadingMessage={loadingMessage} results={results} />
    )}
    <input type="submit" hidden />
  </SearchForm>
);

export default Search;
