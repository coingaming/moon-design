import React from 'react';
import { HeaderGroup } from 'react-table';

type Props = {
  lastHeaderGroup: HeaderGroup;
};

const HiddenTR: React.FC<Props> = ({ lastHeaderGroup }) => {
  return (
    <div {...lastHeaderGroup.getHeaderGroupProps()}>
      {lastHeaderGroup.headers.map((column) => (
        <div
          {...column.getHeaderProps()}
          style={{ ...column.getHeaderProps().style }}
          className={'relative'}
        />
      ))}
    </div>
  );
};

export default HiddenTR;
