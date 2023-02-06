import React, { useContext } from "react";

import ListItem, { ButtonProps, LinkProps } from "./ListItem";
import { SearchContext } from "../utils/context";

interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, "index"> {
  index?: number;
  label?: string | React.ReactNode;
}

export default function FreeSearchAction({
  label = "Search for",
  ...props
}: FreeSearchActionProps) {
  const { search } = useContext(SearchContext);

  return (
    <ListItem index={0} showType={false} {...props}>
      <span className="max-w-md truncate text-bulma">
        {label} <span className="font-semibold">"{search}"</span>
      </span>
    </ListItem>
  );
}
