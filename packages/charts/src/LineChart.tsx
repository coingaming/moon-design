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
import { Selector } from './private/Selector';
import { Tooltip } from './private/Tooltip';
import { Header } from './private/Header';
import ChartIcons from './ChartIcons';

const ResponsiveContainerCustomized = styled(ResponsiveContainer)(
  ({ theme }) => `
  height: 100%;
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
    date: string;
    [key: string]: string | number;
  }[];
  options: {
    label: any;
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
  height?: string | number;
  axisWidth?: number;
  icon?: any;
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
  height = 526,
  axisWidth = 40,
  icon = <ChartIcons.Line />,
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
      height={height}
    >
      <>
        <Header icon={icon} title={title} filter={filter} />
        <Selector
          activeOptions={activeOptions}
          options={options}
          onChange={handleSelectorChange}
        />
        <ResponsiveContainerCustomized>
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
                  name={activeOption.label}
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
