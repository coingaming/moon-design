import React from 'react';
import { HeaderGroup } from 'react-table';

const HiddenTR = ({ lastHeaderGroup }: { lastHeaderGroup: HeaderGroup }) => (
  <div {...lastHeaderGroup.getHeaderGroupProps()}>
    {lastHeaderGroup.headers.map((column) => (
      <div
        {...column.getHeaderProps()}
        style={{ ...column.getHeaderProps().style }}
        className="relative"
      />
    ))}
  </div>
);

export default HiddenTR;
