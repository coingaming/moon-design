import React from 'react';
import { CheckboxMultiselect } from '@heathmont/moon-components';
import { Filter, LineChart } from '@heathmont/moon-charts';

export default function PageLineChart() {
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

  const formatFn = ({ value, key }) => {
    return key === 'date' ? 'Fri ' + value : value;
  };

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
      {() => (
        <CheckboxMultiselect
          onChange={() => {}}
          value={['m', 'd']}
          options={[
            { label: 'Mobile', value: 'm' },
            { label: 'Desktop', value: 'd' },
          ]}
        />
      )}
    </Filter>
  );

  return (
    <LineChart
      title="KPI Overview"
      options={options}
      data={data}
      filter={filter}
      hasUpdates={true}
      formatFn={formatFn}
      onUpdate={() => {}}
      onShare={() => {}}
      onExpand={() => {}}
    />
  );
  //   return (
  //     <>
  //       <ThemeProvider theme={sportsbetDark}>
  //         <h1>Charts</h1>
  //       </ThemeProvider>
  //     </>
  //   );
}
