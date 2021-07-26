// @ts-nocheck
import React from 'react';
import { Text } from '@heathmont/moon-core';
import {
  LogoBitcasinoShort,
  LogoHub88Short,
  LogoLuckyslotsShort,
  LogoSlotsShort,
  LogoSportsbetShort,
} from '@heathmont/moon-assets';
import { Filter, TableChart, ChartIcons } from '@heathmont/moon-charts';
import {
  Avatar,
  CheckboxMultiselect,
  Inline,
  SingleItemSelect,
} from '@heathmont/moon-components';

import Preview from '../../../components/codePreview/Preview';
import Table from '../../../components/Table';
import CodeSnippet from '../../../components/CodeSnippet';

const TableChartExample = () => {
  const OverflowText = ({ children }) => (
    <span
      title={children}
      style={{
        maxWidth: '80px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );

  const dataPlayers = [
    {
      label: <OverflowText> C593088487C593088487C593 </OverflowText>,
      value: '6,222.405',
    },
    { label: 'C593088487', value: '6,222.405' },
    { label: 'C593088487', value: '6,222.405' },
    { label: 'C593088487', value: '6,222.405' },
    { label: 'C593088487', value: '6,222.405' },
  ];

  const dataSuppliers = [
    {
      label: (
        <>
          <LogoSportsbetShort height="24px" width="24px" />
          <Text size={14}>Sportsbet</Text>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <LogoHub88Short height="24px" width="24px" />
          <Text size={14}>Hub88</Text>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <LogoBitcasinoShort height="24px" width="24px" />
          <Text size={14}>Bitcasino</Text>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <LogoLuckyslotsShort height="24px" width="24px" />
          <Text size={14}>Luckyslots</Text>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <LogoSlotsShort height="24px" width="24px" />
          <Text size={14}>Slots</Text>
        </>
      ),
      value: '6,222.405',
    },
  ];

  const dataGames = [
    {
      label: (
        <>
          <Avatar imageUrl="https://www.fillmurray.com/24/24" size="xsmall" />
          <div>
            <Text size={14}>
              <OverflowText>Reactoonz 2 </OverflowText>
            </Text>
            <Text size={12} color="trunks.100">
              Netent
            </Text>
          </div>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <Avatar imageUrl="https://www.fillmurray.com/26/26" size="xsmall" />
          <div>
            <Text size={14}>
              <OverflowText>Golden Tsar</OverflowText>
            </Text>
            <Text size={12} color="trunks.100">
              Red tiger
            </Text>
          </div>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <Avatar imageUrl="https://www.fillmurray.com/28/28" size="xsmall" />
          <div>
            <Text size={14}>
              <OverflowText>Dragons</OverflowText>
            </Text>
            <Text size={12} color="trunks.100">
              Microgaming
            </Text>
          </div>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <Avatar imageUrl="https://www.fillmurray.com/30/30" size="xsmall" />
          <div>
            <Text size={14}>
              <OverflowText>Joker Max</OverflowText>
            </Text>
            <Text size={12} color="trunks.100">
              Netent
            </Text>
          </div>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <Avatar imageUrl="https://www.fillmurray.com/32/32" size="xsmall" />
          <div>
            <Text size={14}>
              <OverflowText>Mad</OverflowText>
            </Text>
            <Text size={12} color="trunks.100">
              Yggdrasil
            </Text>
          </div>
        </>
      ),
      value: '6,222.405',
    },
  ];

  const filter = (
    <Filter title="by GGR">
      {() => {
        return (
          <SingleItemSelect
            onChange={() => {}}
            value="ggr"
            options={[
              { label: 'Active players', value: 'actives' },
              { label: 'GGR', value: 'ggr' },
              { label: 'Bets', value: 'bets' },
            ]}
          />
        );
      }}
    </Filter>
  );

  return (
    <div className="w-full flex flex-row gap-36">
      <TableChart
        title="Top Players"
        icon={<ChartIcons.TopPlayers />}
        filter={filter}
        data={dataPlayers}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />

      <TableChart
        title="Top Suppliers"
        icon={<ChartIcons.TopSuppliers />}
        filter={filter}
        data={dataSuppliers}
        isUpdating={true}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />

      <TableChart
        title="Top Games"
        icon={<ChartIcons.TopGames />}
        filter={filter}
        data={dataGames}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </div>
  );
};

const TableChartCode = `
() => {
  const OverflowText = ({ children }) => (
    <span
      title={children}
      style={{
        maxWidth: '80px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );

  const dataPlayers = [
    {
      label: <OverflowText> C593088487C593088487C593 </OverflowText>,
      value: '6,222.405',
    },
    { label: 'C593088487', value: '6,222.405' },
    { label: 'C593088487', value: '6,222.405' },
    { label: 'C593088487', value: '6,222.405' },
    { label: 'C593088487', value: '6,222.405' },
  ];

  const dataSuppliers = [
    {
      label: (
        <>
          <LogoSportsbetShort height="24px" width="24px" />
          <Text size={14}>Sportsbet</Text>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <LogoHub88Short height="24px" width="24px" />
          <Text size={14}>Hub88</Text>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <LogoBitcasinoShort height="24px" width="24px" />
          <Text size={14}>Bitcasino</Text>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <LogoLuckyslotsShort height="24px" width="24px" />
          <Text size={14}>Luckyslots</Text>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <LogoSlotsShort height="24px" width="24px" />
          <Text size={14}>Slots</Text>
        </>
      ),
      value: '6,222.405',
    },
  ];

  const dataGames = [
    {
      label: (
        <>
          <Avatar imageUrl="https://www.fillmurray.com/24/24" size="xsmall" />
          <div>
            <Text size={14}>
              <OverflowText>Reactoonz 2 </OverflowText>
            </Text>
            <Text size={12} color="trunks.100">
              Netent
            </Text>
          </div>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <Avatar imageUrl="https://www.fillmurray.com/26/26" size="xsmall" />
          <div>
            <Text size={14}>
              <OverflowText>Golden Tsar</OverflowText>
            </Text>
            <Text size={12} color="trunks.100">
              Red tiger
            </Text>
          </div>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <Avatar imageUrl="https://www.fillmurray.com/28/28" size="xsmall" />
          <div>
            <Text size={14}>
              <OverflowText>Dragons</OverflowText>
            </Text>
            <Text size={12} color="trunks.100">
              Microgaming
            </Text>
          </div>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <Avatar imageUrl="https://www.fillmurray.com/30/30" size="xsmall" />
          <div>
            <Text size={14}>
              <OverflowText>Joker Max</OverflowText>
            </Text>
            <Text size={12} color="trunks.100">
              Netent
            </Text>
          </div>
        </>
      ),
      value: '6,222.405',
    },
    {
      label: (
        <>
          <Avatar imageUrl="https://www.fillmurray.com/32/32" size="xsmall" />
          <div>
            <Text size={14}>
              <OverflowText>Mad</OverflowText>
            </Text>
            <Text size={12} color="trunks.100">
              Yggdrasil
            </Text>
          </div>
        </>
      ),
      value: '6,222.405',
    },
  ];

  const filter = (
    <Filter title="by GGR">
      {() => {
        return (
          <SingleItemSelect
            onChange={() => {}}
            value="ggr"
            options={[
              { label: 'Active players', value: 'actives' },
              { label: 'GGR', value: 'ggr' },
              { label: 'Bets', value: 'bets' },
            ]}
          />
        );
      }}
    </Filter>
  );

  return (
    <Inline style={{ flexWrap: 'nowrap' }}>
      <TableChart
        title="Top Players"
        icon={<ChartIcons.TopPlayers />}
        filter={filter}
        data={dataPlayers}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />

      <TableChart
        title="Top Suppliers"
        icon={<ChartIcons.TopSuppliers />}
        filter={filter}
        data={dataSuppliers}
        isUpdating={true}
        hasUpdates={true}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />

      <TableChart
        title="Top Games"
        icon={<ChartIcons.TopGames />}
        filter={filter}
        data={dataGames}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </Inline>
  );
};
`;

const PreviewTableChart = () => {
  return (
    <Preview
      title="Various data"
      preview={<TableChartExample />}
      code={TableChartCode}
    />
  );
};

const TableChartLoadingExample = () => {
  const data = [
    { label: 'Active players', value: '2,786' },
    { label: 'Turnover', value: '€8,765.45' },
    { label: 'GGR', value: '15,873.98' },
    { label: 'Bets', value: '6,763' },
    { label: 'Margin', value: '5.38%' },
  ];

  const filter = (
    <Filter title="by all devices">
      {() => {
        return (
          <CheckboxMultiselect
            onChange={() => {}}
            value={['m', 'd']}
            options={[
              { label: 'Mobile', value: 'm' },
              { label: 'Desktop', value: 'd' },
            ]}
          />
        );
      }}
    </Filter>
  );

  return (
    <div className="w-full flex flex-row gap-36">
      <TableChart
        title="Yesterday"
        icon={<ChartIcons.Time />}
        filter={filter}
        data={[]}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
        loaderText="Loading..."
      />

      <TableChart
        title="Yesterday"
        icon={<ChartIcons.Time />}
        filter={filter}
        data={data}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </div>
  );
};

const TableChartLoadingCode = `
() => {
  const data = [
    { label: 'Active players', value: '2,786' },
    { label: 'Turnover', value: '€8,765.45' },
    { label: 'GGR', value: '15,873.98' },
    { label: 'Bets', value: '6,763' },
    { label: 'Margin', value: '5.38%' },
  ];

  const filter = (
    <Filter title="by all devices">
      {() => {
        return (
          <CheckboxMultiselect
            onChange={() => {}}
            value={['m', 'd']}
            options={[
              { label: 'Mobile', value: 'm' },
              { label: 'Desktop', value: 'd' },
            ]}
          />
        );
      }}
    </Filter>
  );

  return (
    <Inline style={{ flexWrap: 'nowrap' }}>
      <TableChart
        title="Yesterday"
        icon={<ChartIcons.Time />}
        filter={filter}
        data={[]}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
        loaderText="Loading..."
      />

      <TableChart
        title="Yesterday"
        icon={<ChartIcons.Time />}
        filter={filter}
        data={data}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </Inline>
  );
};
`;

const PreviewTableChartLoading = () => {
  return (
    <Preview
      title="Loading"
      preview={<TableChartLoadingExample />}
      code={TableChartLoadingCode}
    />
  );
};

const TableChartActiveExample = () => {
  const data = [
    { label: 'Active players', value: '2,786' },
    { label: 'Turnover', value: '€8,765.45' },
    { label: 'GGR', value: '15,873.98' },
    { label: 'Bets', value: '6,763' },
    { label: 'Margin', value: '5.38%' },
  ];

  const filter = (
    <Filter title="by all devices">
      {() => {
        return (
          <CheckboxMultiselect
            onChange={() => {}}
            value={['m', 'd']}
            options={[
              { label: 'Mobile', value: 'm' },
              { label: 'Desktop', value: 'd' },
            ]}
          />
        );
      }}
    </Filter>
  );

  return (
    <Inline style={{ flexWrap: 'nowrap' }}>
      <TableChart
        title="Yesterday"
        icon={<ChartIcons.Time />}
        filter={filter}
        data={data}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />

      <TableChart
        isActive={true}
        title="Today"
        icon={<ChartIcons.TimeInverted />}
        filter={filter}
        data={data}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />
    </Inline>
  );
};

const TableChartActiveCode = `
() => {
  const data = [
    { label: 'Active players', value: '2,786' },
    { label: 'Turnover', value: '€8,765.45' },
    { label: 'GGR', value: '15,873.98' },
    { label: 'Bets', value: '6,763' },
    { label: 'Margin', value: '5.38%' },
  ];

  const filter = (
    <Filter title="by all devices">
      {() => {
        return (
          <CheckboxMultiselect
            onChange={() => {}}
            value={['m', 'd']}
            options={[
              { label: 'Mobile', value: 'm' },
              { label: 'Desktop', value: 'd' },
            ]}
          />
        );
      }}
    </Filter>
  );

  return (
    <Inline style={{ flexWrap: 'nowrap' }}>
      <TableChart
        title="Yesterday"
        icon={<ChartIcons.Time />}
        filter={filter}
        data={data}
        hasUpdates={false}
        onUpdate={() => {}}
        onShare={() => {}}
        onExpand={() => {}}
      />

      <TableChart
        isActive={true}
        title="Today"
        icon={<ChartIcons.TimeInverted />}
        filter={filter}
        data={data}
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
      title="Active"
      preview={<TableChartActiveExample />}
      code={TableChartActiveCode}
    />
  );
};

export default function PageLineChart() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Table chart</h1>
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
        <PreviewTableChart />
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
              default: '<ChartIcons.Line />',
              description: 'Placeholder for chart icon component',
            },
            {
              name: 'isActive',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Enables active view',
            },
            {
              name: 'loaderText',
              type: 'string, React.ReactNode',
              required: false,
              default: 'No data',
              description: 'The text for "no data" / "loading" states',
            },

          ]}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl">Types</h2>
        <section className="mt-4">
         <CodeSnippet>
            {`Data {
  label: string | React.ReactNode
  value: number | string | React.ReactNode
}`}
          </CodeSnippet>
        </section>
      </section>

      <section className="mt-8">
        <PreviewTableChartLoading />
      </section>

      <section className="mt-8">
        <PreviewTableChartActive />
      </section>
    </>
  );
}
