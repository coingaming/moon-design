import React from 'react';
import { HeaderGroup } from 'react-table';
import HiddenTH from './HiddenTH';

type Props = {
  lastHeaderGroup: HeaderGroup;
};

const HiddenTR: React.FC<Props> = ({ lastHeaderGroup }) => {
  return (
    <div {...lastHeaderGroup.getHeaderGroupProps()}>
      {lastHeaderGroup.headers.map((column) => (
        <HiddenTH
          {...column.getHeaderProps()}
          style={{ ...column.getHeaderProps().style, position: 'relative' }}
        />
      ))}
    </div>
  );
};

export default HiddenTR;
