import ListItem, { ButtonProps, LinkProps } from "./ListItem";
import React, { useContext } from "react";
import { SearchContext } from "../utils/context";

interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, "index"> {
  index?: number;
  label?: string;
}

export default function FreeSearchAction({
  label = "Search for",
  ...props
}: FreeSearchActionProps) {
  const { search } = useContext(SearchContext);

  return (
    <ListItem index={0} showType={false} {...props}>
      <span className="max-w-md truncate">
        {label} <span className="font-semibold">"{search}"</span>
      </span>
    </ListItem>
  );
}
