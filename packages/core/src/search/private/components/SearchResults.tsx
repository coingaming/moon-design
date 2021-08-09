import React from 'react';

import {
  Results,
  ResultsGroup,
  ResultsTitle,
  ResultsLink,
  ResultsTab,
  TabsGroup,
  ResultsBlock,
} from './Styles';

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
      <ResultsBlock>
        <ResultsTitle>{loadingMessage}</ResultsTitle>
      </ResultsBlock>
    )}

    {!!tabs && (
      <ResultsBlock>
        <ResultsTitle>{tabs.title}</ResultsTitle>
        {tabs.items && (
          <TabsGroup>
            {tabs.items.map((item, itemIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <ResultsTab key={itemIndex}>{item}</ResultsTab>
            ))}
          </TabsGroup>
        )}
      </ResultsBlock>
    )}

    {!!results && (
      <ResultsBlock>
        <ResultsTitle>{results.title}</ResultsTitle>
        {results.items && (
          <ResultsGroup>
            {results.items.map((item, itemIndex) => (
              // eslint-disable-next-line react/no-array-index-key
              <ResultsLink key={itemIndex}>{item}</ResultsLink>
            ))}
          </ResultsGroup>
        )}
      </ResultsBlock>
    )}
  </Results>
);
