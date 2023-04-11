import React, { useContext } from 'react';
import { SearchContext } from '../utils/context';
import ListItem, { ButtonProps, LinkProps } from './ResultItem';
import mergeClassnames from '../../../mergeClassnames/mergeClassnames';

interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, 'index'> {
  index?: number;
  label?: string | React.ReactNode;
  className?: string;
}

export default function NoResults({
  label = 'Search for',
  className,
  ...props
}: FreeSearchActionProps) {
  const { search } = useContext(SearchContext);

  return (
    <ListItem index={0} showType={false} {...props}>
      <span className={mergeClassnames("max-w-md truncate text-bulma", className)}>
        {label} <span className="font-medium">"{search}"</span>
      </span>
    </ListItem>
  );
}
