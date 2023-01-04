// @ts-nocheck
import React from 'react';
import { Filter, LineChart } from '@heathmont/moon-charts';
import { CheckboxMultiselect } from '@heathmont/moon-components';

const Example = () => {
  const options = [
    {
      label: 'Active players',
      dataKey: 'actives',
      value: '3,174',
      color: 'frieza.100',
      yAxisId: 'left',
      isActive: true,
    },
    {
      label: 'Turnover',
      dataKey: 'turnover',
      value: '12,174.23',
      color: 'krillin.100',
      yAxisId: 'left',
      isActive: true,
    },
    {
      label: 'GGR',
      dataKey: 'ggr',
      value: '12,174.23',
      color: 'roshi.100',
      yAxisId: 'left',
    },
    {
      label: 'Bets',
      dataKey: 'bets',
      value: '3,174',
      color: 'whis.100',
      yAxisId: 'left',
      isActive: true,
    },
    {
      label: 'Margin',
      dataKey: 'margin',
      value: '5.38%',
      color: 'chiChi.100',
      yAxisId: 'right',
    },
  ];

  const data = Array.from({ length: 20 }, (v, i) => ({
    date: `${i + 1}/10`,
    turnover: Math.floor(Math.random() * 10000),
    margin: Math.floor(Math.random() * 100),
    ggr: Math.floor(Math.random() * 10000),
    bets: Math.floor(Math.random() * 20000),
    actives: Math.floor(Math.random() * 5000),
  }));

  const filter = (
    <Filter title="by all devices">
      <CheckboxMultiselect
        onChange={() => {}}
        value={['m', 'd']}
        options={[
          { label: 'Mobile', value: 'm' },
          { label: 'Desktop', value: 'd' },
        ]}
      />
    </Filter>
  );

  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <LineChart
        title="KPI Overview"
        options={options}
        data={[]}
        filter={filter}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
        loaderText="Loading..."
      />
      <LineChart
        title="KPI Overview"
        options={options}
        data={data}
        filter={filter}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </div>
  );
};

export default Example;
