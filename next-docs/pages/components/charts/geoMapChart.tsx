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
        <Table />
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
