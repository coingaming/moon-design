// @ts-nocheck
import React from 'react';

import { Filter, PieChart, ChartIcons } from '@heathmont/moon-charts';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';
import CodeSnippet from '../../../components/CodeSnippet';

const PieChartExample = () => {
  const data1 = [
    { label: 'Desktop', value: 870, dataKey: 'ggr', color: 'roshi.100' },
    { label: 'Mobile', value: 130, dataKey: 'ggr', color: 'frieza.100' },
  ];

  const data2 = [
    {
      label: 'Desktop',
      value: +(Math.random() * 100).toFixed(4),
      dataKey: 'ggr',
      color: 'roshi.100',
    },
    {
      label: 'Mobile',
      value: +(Math.random() * 100).toFixed(4),
      dataKey: 'ggr',
      color: 'frieza.100',
    },
    {
      label: 'Tablet',
      value: +(Math.random() * 100).toFixed(4),
      dataKey: 'ggr',
      color: 'whis.100',
    },
    {
      label: 'Unknown',
      value: +(Math.random() * 100).toFixed(4),
      dataKey: 'ggr',
      color: 'krillin.100',
    },
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
    <div className="w-full flex flex-row gap-36">
      <PieChart
        title="Device Breakdown"
        data={data1}
        filter={filter}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
        formatFn={formatter}
      />

      <PieChart
        title="Device Breakdown"
        data={data2}
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

const PieChartCode = `import { Filter, PieChart } from '@heathmont/moon-charts';
import { Inline } from '@heathmont/moon-components';

() => {
  const data1 = [
    { label: 'Desktop', value: 870, dataKey: 'ggr', color: 'roshi.100' },
    { label: 'Mobile', value: 130, dataKey: 'ggr', color: 'frieza.100' },
  ];

  const data2 = [
    {
      label: 'Desktop',
      value: +(Math.random() * 100).toFixed(4),
      dataKey: 'ggr',
      color: 'roshi.100',
    },
    {
      label: 'Mobile',
      value: +(Math.random() * 100).toFixed(4),
      dataKey: 'ggr',
      color: 'frieza.100',
    },
    {
      label: 'Tablet',
      value: +(Math.random() * 100).toFixed(4),
      dataKey: 'ggr',
      color: 'whis.100',
    },
    {
      label: 'Unknown',
      value: +(Math.random() * 100).toFixed(4),
      dataKey: 'ggr',
      color: 'krillin.100',
    },
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
    <Inline space="large" style={{ flexWrap: 'nowrap' }}>
      <PieChart
        title="Device Breakdown"
        data={data1}
        filter={filter}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
        formatFn={formatter}
      />

      <PieChart
        title="Device Breakdown"
        data={data2}
        filter={filter}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
        formatFn={formatter}
      />
    </Inline>
  );
};
`;

const PreviewPieChart = () => {
  return (
    <Preview
      title="Default"
      preview={
        <>
          <PieChartExample />
        </>
      }
      code={PieChartCode}
    />
  );
};

const PieChartLoadingExample = () => {
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
    <div className="w-full flex flex-row gap-36">
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

const PieChartLoadingCode = `import { Filter, PieChart } from '@heathmont/moon-charts';
import { Inline } from '@heathmont/moon-components';

() => {
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
    <Inline style={{ flexWrap: 'nowrap' }}>
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
    </Inline>
  );
};
`;

const PreviewPieChartLoading = () => {
  return (
    <Preview
      title="Loading"
      preview={
        <>
          <PieChartLoadingExample />
        </>
      }
      code={PieChartLoadingCode}
    />
  );
};

export default function PageLineChart() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Pie chart</h1>
        <p className="text-lg mt-4">
          Based on{' '}
          <a className="underline" href="https://recharts.org/en-US/">
            Recharts
          </a>
          .
        </p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <PreviewPieChart />
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
              default: '446',
              description: 'Height of component',
            },
            {
              name: 'icon',
              type: 'React.ReactNode',
              required: false,
              default: <ChartIcons.Devices />,
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
          ]}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Types</h2>
        <section className="mt-4">
          <CodeSnippet>
            {`Data {
  label: string
  value: number
  color: ColorProps
  dataKey: string
}`}
          </CodeSnippet>
        </section>
      </section>

      <section className="mt-8">
        <PreviewPieChartLoading />
      </section>
    </>
  );
}
