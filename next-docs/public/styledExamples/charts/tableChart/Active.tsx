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
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
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
      <TableChart
        isActive={true}
        title="Today"
        icon={<ChartIcons.TimeInverted />}
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
