// @ts-nocheck
import React from 'react';
import { Text } from '@heathmont/moon-core';
import {
  LogoBitcasinoShort,
  LogoHub88Short,
  LogoLuckyslotsShort,
  LogoSlotsShort,
  LogoSportsbetShort,
} from '@heathmont/assets/styled';
import { Filter, TableChart, ChartIcons } from '@heathmont/moon-charts';
import { Avatar, SingleItemSelect } from '@heathmont/moon-components';

const Example = () => {
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
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
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

export default Example;
