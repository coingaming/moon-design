// @ts-nocheck
import React from 'react';
import { Filter, GeoMapChart } from '@heathmont/moon-charts';
import { SingleItemSelect } from '@heathmont/moon-components';

const Example = () => {
  const data = [
    { label: 'Estonia', code: 'EST', value: 120 },
    { label: 'Russia', code: 'RUS', value: 100 },
    { label: 'Belarus', code: 'BLR', value: 80 },
    { label: 'Argentina', code: 'ARG', value: 60 },
    { label: 'USA', code: 'USA', value: 40 },
  ];

  const filter = (
    <Filter title="by GGR">
      {() => (
        <SingleItemSelect
          onChange={() => {}}
          value="ggr"
          options={[
            { label: 'Active players', value: 'actives' },
            { label: 'GGR', value: 'ggr' },
            { label: 'Bets', value: 'bets' },
          ]}
        />
      )}
    </Filter>
  );

  return (
    <GeoMapChart
      title="Top Countries"
      data={data}
      filter={filter}
      hasUpdates={true}
      onUpdate={() => {}}
      onShare={() => {}}
      onExpand={() => {}}
    />
  );
};

export default Example;
