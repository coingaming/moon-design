import React, { ReactNode } from "react";
import mergeClassnames from "../../../mergeClassnames/mergeClassnames";

export const ListHeading: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => <h5 className={mergeClassnames("text-bulma text-sm font-medium px-2 py-1", className)}>{children}</h5>

export default function List({ children, className }: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ul className={mergeClassnames("min-w-full space-y-1", className)} tabIndex={-1}>
      <li>{children}</li>
    </ul>
  );
}
