import React from 'react';

import {
  Results,
  ResultsItem,
  ResultsItemText,
  ResultsLink,
} from './Results';

interface SearchResultsProps {
  loadingMessage?: JSX.Element;
  results?: [JSX.Element];
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  loadingMessage,
  results,
}) => (
    <Results>
      {loadingMessage && !results && (
        <ResultsItem>
          <ResultsItemText>{loadingMessage}</ResultsItemText>
        </ResultsItem>
      )}

      <p>Here are the results</p>

      {results
        && results.map((result, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ResultsItem key={index}>
            <ResultsItemText>{index}</ResultsItemText>
            <ResultsLink>{result}</ResultsLink>
          </ResultsItem>
        ))}
    </Results>
);
