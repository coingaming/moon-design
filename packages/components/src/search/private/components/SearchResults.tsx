import React from 'react';

import {
  Results,
  ResultsItem,
  ResultsItemText,
  ResultsGroup,
  ResultsLink,
} from './Results';

interface Result {
  title: JSX.Element;
  items?: [JSX.Element];
}

interface SearchResultsProps {
  loadingMessage?: JSX.Element;
  results?: [Result];
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

    {results &&
      results.map((result, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ResultsItem key={index}>
          <ResultsItemText>{result.title}</ResultsItemText>
          {result.items && (
            <ResultsGroup>
              {result.items.map((item, itemIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <ResultsLink key={itemIndex}>{item}</ResultsLink>
              ))}
            </ResultsGroup>
          )}
        </ResultsItem>
      ))}
  </Results>
);
