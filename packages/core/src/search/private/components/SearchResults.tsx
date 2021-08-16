import React from 'react';

import { Results } from './Styles';

interface SearchResultsProps {
  results?: JSX.Element;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ results }) => (
  <Results>
    {results}
  </Results>
);
