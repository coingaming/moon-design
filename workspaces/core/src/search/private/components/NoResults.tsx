import React, { useContext } from 'react';
import mergeClassnames from '../../../mergeClassnames/mergeClassnames';
import { SearchContext } from '../utils/context';
import ListItem from './ResultItem';
import type FreeSearchActionProps from '../types/FreeSearchActionProps';

const NoResults = ({
  label = 'Search for',
  className,
  ...props
}: FreeSearchActionProps) => {
  const { search } = useContext(SearchContext);
  return (
    <ListItem index={0} showType={false} {...props}>
      <span
        className={mergeClassnames('max-w-md truncate text-bulma', className)}
      >
        {label} <span className="font-medium">"{search}"</span>
      </span>
    </ListItem>
  );
};

export default NoResults;
