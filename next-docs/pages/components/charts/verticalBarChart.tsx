import React from 'react';

import { Filter, VerticalBarChart } from '@heathmont/moon-charts';
import { SingleItemSelect } from '@heathmont/moon-components';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';
import CodeSnippet from '../../../components/CodeSnippet';

const VerticalBarChartExample = () => {
  const dataPositive = [
    { label: 'Estonia', code: 'EST', value: 120 },
    { label: 'Russia', code: 'RUS', value: 100 },
    { label: 'Belarus', code: 'BLR', value: 80 },
    { label: 'Argentina', code: 'ARG', value: 60 },
    { label: 'USA', code: 'USA', value: 40 },
  ];

  const dataMix = [
    { label: 'Estonia', code: 'EST', value: 120 },
    { label: 'Russia', code: 'RUS', value: 100 },
    { label: 'Belarus', code: 'BLR', value: 20 },
    { label: 'Argentina', code: 'ARG', value: -60 },
    { label: 'USA', code: 'USA', value: -80 },
  ];

  const dataNegative = [
    { label: 'Estonia', code: 'EST', value: -40 },
    { label: 'Russia', code: 'RUS', value: -60 },
    { label: 'Belarus', code: 'BLR', value: -80 },
    { label: 'Argentina', code: 'ARG', value: -100 },
    { label: 'USA', code: 'USA', value: -120 },
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
    <div className="w-full flex flex-row gap-36">
      <VerticalBarChart
        title="Top Countries"
        data={dataPositive}
        filter={filter}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />

      <VerticalBarChart
        title="Top Countries"
        data={dataMix}
        filter={filter}
        isUpdating={true}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />

      <VerticalBarChart
        title="Top Countries"
        data={dataNegative}
        filter={filter}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </div>
  );
};

const VerticalBarChartCode = `import { Filter, VerticalBarChart } from '@heathmont/moon-charts';
import { SingleItemSelect } from '@heathmont/moon-components';

() => {
  const dataPositive = [
    { label: 'Estonia', code: 'EST', value: 120 },
    { label: 'Russia', code: 'RUS', value: 100 },
    { label: 'Belarus', code: 'BLR', value: 80 },
    { label: 'Argentina', code: 'ARG', value: 60 },
    { label: 'USA', code: 'USA', value: 40 },
  ];

  const dataMix = [
    { label: 'Estonia', code: 'EST', value: 120 },
    { label: 'Russia', code: 'RUS', value: 100 },
    { label: 'Belarus', code: 'BLR', value: 20 },
    { label: 'Argentina', code: 'ARG', value: -60 },
    { label: 'USA', code: 'USA', value: -80 },
  ];

  const dataNegative = [
    { label: 'Estonia', code: 'EST', value: -40 },
    { label: 'Russia', code: 'RUS', value: -60 },
    { label: 'Belarus', code: 'BLR', value: -80 },
    { label: 'Argentina', code: 'ARG', value: -100 },
    { label: 'USA', code: 'USA', value: -120 },
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
    <Inline style={{ flexWrap: 'nowrap' }}>
      <VerticalBarChart
        title="Top Countries"
        data={dataPositive}
        filter={filter}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />

      <VerticalBarChart
        title="Top Countries"
        data={dataMix}
        filter={filter}
        isUpdating={true}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />

      <VerticalBarChart
        title="Top Countries"
        data={dataNegative}
        filter={filter}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </Inline>
  );
};
`;

const PreviewTableChartActive = () => {
  return (
    <Preview
      title="Various data"
      preview={<VerticalBarChartExample />}
      code={VerticalBarChartCode}
    />
  );
};

const TableChartNoDataExample = () => {
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
      <VerticalBarChart
        title="Top Countries"
        data={[]}
        filter={filter}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </div>
  );
};

const TableChartNoDataCode = `import { Filter, VerticalBarChart } from '@heathmont/moon-charts';
import { SingleItemSelect } from '@heathmont/moon-components';

() => {
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
      <VerticalBarChart
        title="Top Countries"
        data={[]}
        filter={filter}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </div>
  );
};
`;

const PreviewTableChartNoData = () => {
  return (
    <Preview
      title="No data"
      preview={<TableChartNoDataExample />}
      code={TableChartNoDataCode}
    />
  );
};

export default function PageVerticalBarChart() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Line chart</h1>
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
        <PreviewTableChartActive />
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
              name: 'positiveColor',
              type: 'ColorProps',
              required: false,
              default: 'krillin.100',
              description: 'Highlight color for positive values',
            },
            {
              name: 'negativeColor',
              type: 'ColorProps',
              required: false,
              default: 'whis.100',
              description: 'Highlight color for negative values',
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
          ]}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Types</h2>
        <section className="mt-4">
          <CodeSnippet>
            {`Data {
  label: string | React.ReactNode;
  code: string;
  value: number;
  dataKey: string;
}`}
          </CodeSnippet>
        </section>
      </section>

      <section className="mt-8">
        <PreviewTableChartNoData />
      </section>
    </>
  );
}
