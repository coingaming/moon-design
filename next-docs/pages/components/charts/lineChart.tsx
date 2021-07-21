import React from 'react';

import { Filter, LineChart } from '@heathmont/moon-charts';
import { CheckboxMultiselect, Inline } from '@heathmont/moon-components';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';

const LineChartDefault = () => {
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
};

const PreviewLineChart = () => {
  return (
    <Preview
      title="Default"
      preview={
        <>
          <LineChartDefault />
        </>
      }
      code={`import { Filter, LineChart } from '@heathmont/moon-charts';
import { CheckboxMultiselect } from '@heathmont/moon-components';

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
  date: (i + 1)/10,
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
`}
    />
  );
};

const LineChartLoading = () => {
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
    <Inline style={{ flexWrap: 'nowrap' }}>
      <div style={{ width: '50%' }}>
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
      </div>
      <div style={{ width: '50%' }}>
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
    </Inline>
  );
};

const PreviewLineChartLoading = () => {
  return (
    <Preview
      title="Loading"
      preview={
        <>
          <LineChartLoading />
        </>
      }
      code={`import { Filter, LineChart } from '@heathmont/moon-charts';
import { CheckboxMultiselect, Inline } from '@heathmont/moon-components';

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
  date: (i + 1)/10,
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
  <Inline style={{ flexWrap: 'nowrap' }}>
    <div style={{ width: '50%' }}>
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
    </div>
    <div style={{ width: '50%' }}>
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
  </Inline>
`}
    />
  );
};


export default function PageLineChart() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Line chart</h1>
        <p className="text-lg mt-4">
          Based on{' '}
          <a className="underline" href="https://www.react-simple-maps.io/">
            react-simple-maps
          </a>
          .
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <PreviewLineChart />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl mb-4">Props</h2>
        <Table
          data={[
            {
              name: 'title',
              type: 'string',
              required: true,
              default: '-',
              description: 'Chart title text',
            },
            {
              name: 'data',
              type: 'Data[]',
              required: true,
              default: '-',
              description: 'Array of data',
            },
            {
              name: 'options',
              type: 'Option[]',
              required: true,
              default: '-',
              description: 'Array of available chart options',
            },
            {
              name: 'onUpdate',
              type: 'function',
              required: false,
              default: '-',
              description: 'Handler function when pressing the update button',
            },
            {
              name: 'onShare',
              type: 'function',
              required: false,
              default: '-',
              description: 'Handler function when pressing the share button',
            },
            {
              name: 'onExpand',
              type: 'function',
              required: false,
              default: '-',
              description: 'Handler function when pressing the expand button',
            },
            {
              name: 'isUpdating',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'If set true, the loader icon is displayed',
            },
            {
              name: 'hasUpdates',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'If set true, the dot icon is displayed',
            },
            {
              name: 'filter',
              type: 'React.ReactNode',
              required: false,
              default: '-',
              description: 'Placeholder for filter component',
            },
            {
              name: 'height',
              type: 'string, number',
              required: false,
              default: '526',
              description: 'Height of component',
            },
            {
              name: 'axisWidth',
              type: 'number',
              required: false,
              default: '40',
              description: 'The width of axis',
            },
            {
              name: 'icon',
              type: 'React.ReactNode',
              required: false,
              default: '<ChartIcons.Line />',
              description: 'Placeholder for chart icon component',
            },
            {
              name: 'loaderText',
              type: 'string, React.ReactNode',
              required: false,
              default: 'No data',
              description: 'The text for "no data" / "loading" states',
            },
            {
              name: 'formatFn',
              type: 'function',
              required: false,
              default: '-',
              description: 'The formatter function of data value',
            },
            {
              name: 'interval',
              type: '"preserveStart" | "preserveEnd" | "preserveStartEnd" | number',
              required: false,
              default: '-',
              description: 'If set 0, all the ticks will be shown',
            },
          ]}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Types</h2>
        <section className="mt-4">
          <pre className="bg-gray-50 px-4 py-3 text-left text-sm rounded-lg font-medium text-gray-500 ">
            {`Data {
  date: string
  [key: string]: string | number
}`}
          </pre>
        </section>

        <section className="mt-4">
          <pre className="bg-gray-50 px-4 py-3 text-left text-sm rounded-lg font-medium text-gray-500 ">
            {`Option {
  label: string;
  dataKey: string;
  value: number;
  color: ColorProps;
  yAxisId: string;
  isActive?: boolean;
}`}
          </pre>
        </section>
      </section>

      <section className="mt-8">
        <PreviewLineChartLoading />
      </section>
    </>
  );
}
