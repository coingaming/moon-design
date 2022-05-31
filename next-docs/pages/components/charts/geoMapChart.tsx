// @ts-nocheck
import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import CodeSnippet from '../../../components/CodeSnippet';
import PropsTable from '../../../components/PropsTable';
import Default from '../../../public/examples/charts/geoMapChart/Default';
import useExamples from '../../../utils/useExamples';

export default function PageGeoMapChart() {
  const examples = useExamples('charts/geoMapChart');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-medium">Geo map chart</h1>
        <p className="text-lg mt-4">
          Based on{' '}
          <a className="underline" href="https://www.react-simple-maps.io/">
            react-simple-maps
          </a>{' '}
          and{' '}
          <a className="underline" href="https://recharts.org/en-US/">
            Recharts
          </a>
          .
        </p>
      </section>

      <section className="mt-8">
        <Preview
          title="Default"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>
      <section className="mt-8">
        <PropsTable
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
              description: 'Required. Array of data',
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
              default: '<ChartIcons.Countries />',
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
        <CodeSnippet>
          {`Data {
  label: string | React.ReactNode;
  code: string;
  value: number;
  dataKey: string;
}`}
        </CodeSnippet>
      </section>
    </>
  );
}
