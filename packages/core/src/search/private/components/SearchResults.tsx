import React from 'react';

import {
  Results,
  ResultsItem,
  ResultsItemText,
  ResultsGroup,
  ResultsLink,
} from './Results';

interface SearchResultsProps {
  loadingMessage?: JSX.Element;
  searchResults?: SearchResultTypes;
}

interface Result {
  title: JSX.Element;
  items?: [JSX.Element];
}

export interface SearchResultTypes {
  categories?: Result;
  links?: Result;
  items?: Result;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  loadingMessage,
  searchResults,
}) => (
  <Results>
    {loadingMessage && !searchResults && (
      <ResultsItem>
        <ResultsItemText>{loadingMessage}</ResultsItemText>
      </ResultsItem>
    )}

    {searchResults && searchResults.links && (
      <ResultsGroup>
        <ResultsItemText>{searchResults.links.title}</ResultsItemText>
        {searchResults.links.items?.map((item, itemIndex) => (
          <ResultsItem key={itemIndex}>
            <ResultsLink key={itemIndex}>{item}</ResultsLink>
          </ResultsItem>
        ))}
      </ResultsGroup>
    )}

    {searchResults && searchResults.categories && (
      <ResultsGroup>
        <ResultsItemText>{searchResults.categories.title}</ResultsItemText>
        {searchResults.categories.items?.map((item, itemIndex) => (
          <ResultsItem key={itemIndex}>
            <ResultsLink key={itemIndex}>{item}</ResultsLink>
          </ResultsItem>
        ))}
      </ResultsGroup>
    )}

    {searchResults && searchResults.items && (
      <ResultsGroup>
        <ResultsItemText>{searchResults.items.title}</ResultsItemText>
        {searchResults.items.items?.map((item, itemIndex) => (
          <ResultsItem key={itemIndex}>
            <ResultsLink key={itemIndex}>{item}</ResultsLink>
          </ResultsItem>
        ))}
      </ResultsGroup>
    )}
  </Results>
);
