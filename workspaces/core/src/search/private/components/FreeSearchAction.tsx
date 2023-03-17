import React, { useContext } from 'react';
import { SearchContext } from '../utils/context';
import ListItem, { ButtonProps, LinkProps } from './ListItem';

interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, 'index'> {
  index?: number;
  label?: string | React.ReactNode;
}

export default function FreeSearchAction({
  label = 'Search for',
  ...props
}: FreeSearchActionProps) {
  const { search } = useContext(SearchContext);

  return (
    <ListItem index={0} showType={false} {...props}>
      <span className="max-w-md truncate text-bulma">
        {label} <span className="font-medium">"{search}"</span>
      </span>
    </ListItem>
  );
}
