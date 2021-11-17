// @ts-nocheck
import React from 'react';
import { Filter, TableChart, ChartIcons } from '@heathmont/moon-charts';
import { CheckboxMultiselect } from '@heathmont/moon-components';

const Example = () => {
  const data = [
    { label: 'Active players', value: '2,786' },
    { label: 'Turnover', value: '€8,765.45' },
    { label: 'GGR', value: '15,873.98' },
    { label: 'Bets', value: '6,763' },
    { label: 'Margin', value: '5.38%' },
  ];

  const filter = (
    <Filter title="by all devices">
      {() => {
        return (
          <CheckboxMultiselect
            onChange={() => {}}
            value={['m', 'd']}
            options={[
              { label: 'Mobile', value: 'm' },
              { label: 'Desktop', value: 'd' },
            ]}
          />
        );
      }}
    </Filter>
  );

  return (
    <div className="w-full flex flex-row gap-36">
      <TableChart
        title="Yesterday"
        icon={<ChartIcons.Time />}
        filter={filter}
        data={[]}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
        loaderText="Loading..."
      />

      <TableChart
        title="Yesterday"
        icon={<ChartIcons.Time />}
        filter={filter}
        data={data}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </div>
  );
};

export default Example;
