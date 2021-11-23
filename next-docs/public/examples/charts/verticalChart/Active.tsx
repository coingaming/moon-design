// @ts-nocheck
import React from 'react';
import { Filter, VerticalBarChart } from '@heathmont/moon-charts';
import { SingleItemSelect } from '@heathmont/moon-components';

const Example = () => {
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

export default Example;
