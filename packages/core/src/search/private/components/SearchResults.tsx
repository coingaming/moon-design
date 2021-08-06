import React from 'react';

import {
  Results,
  ResultsGroup,
  ResultsItem,
  ResultsItemText,
  ResultsLink,
  ResultsTab,
} from './Results';

interface SearchResultsProps {
  results?: Result;
  loadingMessage?: JSX.Element;
  tabs?: Result;
  size?: 'small' | 'medium';
}


export interface Result {
  items?: JSX.Element[];
  title: JSX.Element;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  loadingMessage,
  results,
  size,
  tabs,
}) => (
  <Results size={size}>
    {loadingMessage && !tabs && !results && (
      <ResultsItem>
        <ResultsItemText>{loadingMessage}</ResultsItemText>
      </ResultsItem>
    )}

    {!!tabs &&
        <ResultsItem>
          <ResultsItemText>{tabs.title}</ResultsItemText>
          {tabs.items && (
            <ResultsGroup>
              {tabs.items.map((item, itemIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <ResultsTab key={itemIndex}>{item}</ResultsTab>
              ))}
            </ResultsGroup>
          )}
        </ResultsItem>
      }

    {!!results &&
        <ResultsItem>
          <ResultsItemText>{results.title}</ResultsItemText>
          {results.items && (
            <ResultsGroup>
              {results.items.map((item, itemIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <ResultsLink key={itemIndex}>{item}</ResultsLink>
              ))}
            </ResultsGroup>
          )}
        </ResultsItem>
      }

  </Results>
);
