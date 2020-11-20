import React, { useState } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip as RechartTooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps, useTheme } from '@heathmont/moon-themes';

import { Panel } from './private/Panel';
import { LineIcon } from './private/icons/LineIcon';
import { Selector } from './private/Selector';
import { Tooltip } from './private/Tooltip';
import { Header } from './private/Header';

const ResponsiveContainerCustomized = styled(ResponsiveContainer)(
  ({ theme }) => `
  .recharts-cartesian-axis {
    text {
      fill: ${theme.color.trunks[100]};
      font-size: ${rem(theme.space.small)};
    }
  }
  .recharts-cartesian-grid-vertical {
    line:first-child,
    line:last-child {
      opacity: 0;
    }
  }
`
);

type Props = {
  title: string;
  data: {
    [key: string]: number;
  }[];
  options: {
    title: string;
    key: string;
    value: string | number;
    color: ColorProps;
    yAxisId: string;
    isActive?: boolean;
  }[];
  onUpdate?: () => {};
  onShare?: () => {};
  onExpand?: () => {};
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  containerHeight?: number;
  axisWidth?: number;
};

const LineChart: React.FC<Props> = ({
  title,
  data,
  options,
  onUpdate,
  onShare,
  onExpand,
  hasUpdates = false,
  filter,
  containerHeight = 256,
  axisWidth = 40,
}) => {
  const theme = useTheme();
  const initialActiveOptions = options
    .filter(({ isActive }) => isActive)
    .map(({ key }) => key);
  const [activeOptions, setActiveOptions] = useState(initialActiveOptions);

  const handleSelectorChange = (key: string, isActive: boolean) => {
    setActiveOptions(
      isActive
        ? [...activeOptions, key]
        : activeOptions.filter(option => option !== key)
    );
  };

  return (
    <Panel
      hasUpdates={hasUpdates}
      onUpdate={onUpdate}
      onShare={onShare}
      onExpand={onExpand}
    >
      <>
        <Header icon={<LineIcon />} title={title} filter={filter} />
        <Selector
          activeOptions={activeOptions}
          options={options}
          onChange={handleSelectorChange}
        />
        <ResponsiveContainerCustomized height={containerHeight}>
          <RechartsLineChart data={data}>
            <CartesianGrid stroke={themed('color', 'beerus.100')(theme)} />
            <RechartTooltip content={<Tooltip />} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              interval={0}
            />
            <YAxis
              yAxisId="left"
              type="number"
              tickLine={false}
              axisLine={false}
              width={axisWidth}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              type="number"
              tickLine={false}
              axisLine={false}
              width={axisWidth}
            />

            {activeOptions.map(option => {
              const activeOption = options.find(({ key }) => key === option);
              if (!activeOption) return null;
              return (
                <Line
                  key={activeOption.key}
                  type="linear"
                  yAxisId={activeOption.yAxisId}
                  dataKey={activeOption.key}
                  name={activeOption.title}
                  stroke={themed('color', activeOption.color)(theme)}
                  dot={false}
                />
              );
            })}
          </RechartsLineChart>
        </ResponsiveContainerCustomized>
      </>
    </Panel>
  );
};

export default LineChart;
