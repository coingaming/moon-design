import React, { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
}

export const ListHeading: React.FC = ({ children }) => <h5 className="text-bulma text-sm font-medium px-2 py-1">{children}</h5>

export default function List({ children }: ListProps) {
  return (
    <ul className="space-y-1" tabIndex={-1}>
      <li>{children}</li>
    </ul>
  );
}
