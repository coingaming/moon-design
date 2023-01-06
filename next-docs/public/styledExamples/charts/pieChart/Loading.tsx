// @ts-nocheck
import React from 'react';
import { Filter, PieChart } from '@heathmont/moon-charts';
import { SingleItemSelect } from '@heathmont/moon-components';

const Example = () => {
  const data = [
    { label: 'Desktop', value: 870, dataKey: 'ggr', color: 'roshi.100' },
    { label: 'Mobile', value: 130, dataKey: 'ggr', color: 'frieza.100' },
  ];

  const formatter = ({ value }) => {
    return '$' + value;
  };

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
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <PieChart
        title="Device Breakdown"
        data={[]}
        filter={filter}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
        formatFn={formatter}
        loaderText="Loading..."
      />
      <PieChart
        title="Device Breakdown"
        data={data}
        filter={filter}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
        formatFn={formatter}
      />
    </div>
  );
};

export default Example;
