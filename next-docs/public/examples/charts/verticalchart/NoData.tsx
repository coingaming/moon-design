// @ts-nochecka
import React from 'react';
import { Filter, VerticalBarChart } from '@heathmont/moon-charts';
import { SingleItemSelect } from '@heathmont/moon-components';

const Example = () => {
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

export default Example;
