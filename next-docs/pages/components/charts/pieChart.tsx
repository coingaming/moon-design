// @ts-nocheck
import React from 'react';

import { ChartIcons } from '@heathmont/moon-charts';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';
import CodeSnippet from '../../../components/CodeSnippet';

import Default from '../../../public/examples/charts/piechart/Default';
import Loading from '../../../public/examples/charts/piechart/Loading';

import useExamples from '../../../utils/useExamples';

export default function PageLineChart() {
  const examples = useExamples('charts/PieChart');

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
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
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
        <Preview
          title="Loading"
          preview={<Loading />}
          code={examples ? examples.Loading : 'Loading'}
        />
      </section>
    </>
  );
}
