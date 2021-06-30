import { Filter, GeoMapChart } from '@heathmont/moon-charts';
import { SingleItemSelect } from '@heathmont/moon-components';

import React from 'react';
import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';

const ExampleGeoMapChart = () => {
  const data = [
    { label: 'Estonia', code: 'EST', value: 120 },
    { label: 'Russia', code: 'RUS', value: 100 },
    { label: 'Belarus', code: 'BLR', value: 80 },
    { label: 'Argentina', code: 'ARG', value: 60 },
    { label: 'USA', code: 'USA', value: 40 },
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
    <GeoMapChart
      title="Top Countries"
      data={data}
      filter={filter}
      hasUpdates={true}
      onUpdate={() => {}}
      onShare={() => {}}
      onExpand={() => {}}
    />
  );
};

export default function PageGeoMapChart() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Geo map chart</h1>
        <p className="text-lg mt-4">
          Based on{' '}
          <a className="underline" href="https://www.react-simple-maps.io/">
            react-simple-maps
          </a>
          .
        </p>
      </section>

      <section className="mt-8">
        <Preview
          title="Default"
          preview={<ExampleGeoMapChart />}
          code={`import { Filter, GeoMapChart } from '@heathmont/moon-charts';
import { SingleItemSelect } from '@heathmont/moon-components';

() => {
  const data = [
    { label: 'Estonia', code: 'EST', value: 120 },
    { label: 'Russia', code: 'RUS', value: 100 },
    { label: 'Belarus', code: 'BLR', value: 80 },
    { label: 'Argentina', code: 'ARG', value: 60 },
    { label: 'USA', code: 'USA', value: 40 },
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
    <GeoMapChart
      title="Top Countries"
      data={data}
      filter={filter}
      hasUpdates={true}
      onUpdate={() => {}}
      onShare={() => {}}
      onExpand={() => {}}
    />
  );
}
`}
        />
      </section>
      <section className="mt-8">
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
        <pre className="bg-gray-50 px-4 py-3 text-left text-sm rounded-lg font-medium text-gray-500 ">
          {`Data {
  label: string | React.ReactNode;
  code: string;
  value: number;
  dataKey: string;
}`}
        </pre>
      </section>
    </>
  );
}
