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
import { Loader } from './private/Loader';

const ResponsiveContainerCustomized = styled(ResponsiveContainer)(
  ({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexGrow: 1,
    '.recharts-cartesian-axis': {
      text: {
        fill: theme.color.trunks[100],
        fontSize: rem(theme.space.small),
      },
    },
  })
);

type Props = {
  title: string;
  data: {
    date: string;
    [key: string]: string | number;
  }[];
  options: {
    label: string;
    dataKey: string;
    value: number;
    color: ColorProps;
    yAxisId: string;
    isActive?: boolean;
  }[];
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isUpdating?: boolean;
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  axisWidth?: number;
  icon?: React.ReactNode;
  interval?: 'preserveStart' | 'preserveEnd' | 'preserveStartEnd' | number;
  formatFn?: (props: { value: any; key: string }) => any;
  loaderText?: string | React.ReactNode;
};

const LineChart: React.FC<Props> = ({
  title,
  data,
  options,
  onUpdate,
  onShare,
  onExpand,
  isUpdating = false,
  hasUpdates = false,
  filter,
  height = 526,
  axisWidth = 40,
  interval,
  icon = <ChartIcons.Line />,
  formatFn = ({ value }) => value,
  loaderText = 'No data',
}) => {
  const theme = useTheme();
  const bgColor = themed('color', 'gohan.100')(theme);
  const initialActiveOptions = options
    .filter(({ isActive }) => isActive)
    .map(({ dataKey }) => dataKey);
  const [activeOptions, setActiveOptions] = useState(initialActiveOptions);

  const handleSelectorChange = (dataKey: string, isActive: boolean) => {
    setActiveOptions(
      isActive
        ? [...activeOptions, dataKey]
        : activeOptions.filter((option) => option !== dataKey)
    );
  };

  const isLoading = !data.length;

  return (
    <Panel
      isUpdating={isUpdating}
      hasUpdates={hasUpdates}
      onUpdate={onUpdate}
      onShare={onShare}
      onExpand={onExpand}
      height={height}
    >
      <>
        <Header icon={icon} title={title} filter={filter} />
        {isLoading ? (
          <Loader icon={<ChartIcons.LineChartLoading />} title={loaderText} />
        ) : (
          <>
            <Selector
              activeOptions={activeOptions}
              options={options}
              onChange={handleSelectorChange}
              formatFn={formatFn}
            />
            <ResponsiveContainerCustomized>
              <RechartsLineChart data={data}>
                <CartesianGrid stroke={themed('color', 'beerus.100')(theme)} />
                <RechartTooltip content={<Tooltip formatFn={formatFn} />} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  interval={interval}
                  domain={['auto', 'auto']}
                  tickFormatter={(value) =>
                    formatFn({ value, key: 'dateAxis' })
                  }
                />
                <YAxis
                  yAxisId="left"
                  type="number"
                  tickLine={false}
                  axisLine
                  stroke={bgColor}
                  width={axisWidth}
                  tickFormatter={(value) =>
                    formatFn({ value, key: 'leftAxis' })
                  }
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  type="number"
                  tickLine={false}
                  axisLine
                  stroke={bgColor}
                  width={axisWidth}
                  tickFormatter={(value) =>
                    formatFn({ value, key: 'rightAxis' })
                  }
                />

                {activeOptions.map((option) => {
                  const activeOption = options.find(
                    ({ dataKey }) => dataKey === option
                  );
                  if (!activeOption) return null;
                  return (
                    <Line
                      key={activeOption.dataKey}
                      type="linear"
                      yAxisId={activeOption.yAxisId}
                      dataKey={activeOption.dataKey}
                      name={activeOption.label}
                      stroke={themed('color', activeOption.color)(theme)}
                      dot={false}
                    />
                  );
                })}
              </RechartsLineChart>
            </ResponsiveContainerCustomized>
          </>
        )}
      </>
    </Panel>
  );
};

export default LineChart;
