import React, { useState } from 'react';
import {
  Pie,
  Sector,
  Cell,
  PieChart as RechartPieChart,
  Tooltip as RechartTooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';

import { Panel } from './private/Panel';
import { Header } from './private/Header';
import { Tooltip } from './private/Tooltip';
import ChartIcons from './ChartIcons';

const ResponsiveContainerCustomized = styled(ResponsiveContainer)(
  ({ theme }) => `
  height: 100%;
  .charts-title {
    fill: ${theme.color.trunks[100]};
    font-size: ${rem(14)};
  }
  .chart-percent {
    fill: ${theme.color.bulma[100]};
    font-size: ${rem(24)};
  }
`
);

type Props = {
  title: string;
  data: {
    label: any;
    value: number;
    color: ColorProps;
  }[];
  onUpdate?: () => {};
  onShare?: () => {};
  onExpand?: () => {};
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  icon?: any;
};

const PieChart: React.FC<Props> = ({
  title,
  data,
  onUpdate,
  onShare,
  onExpand,
  hasUpdates = false,
  filter,
  height = 446,
  icon = <ChartIcons.Devices />,
}) => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const onMouseEnter = (event: any) => {
    setActiveIndex(event['data-index']);
  };

  const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
    } = props;
    const preparedPercent = +(percent * 100).toFixed(2);

    return (
      <g>
        <circle cx={cx - 30} cy={cy - 15} r={4} fill={fill} />
        <text
          x={cx - 20}
          y={cy}
          dy={-10}
          textAnchor="left"
          className="charts-title"
        >
          {payload.label}
        </text>
        <text
          x={cx}
          y={cy}
          dy={20}
          textAnchor="middle"
          className="chart-percent"
        >
          {preparedPercent}%
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 2}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
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
        <ResponsiveContainerCustomized>
          <RechartPieChart>
            <RechartTooltip
              coordinate={{
                x: -20,
                y: -20,
              }}
              content={<Tooltip />}
            />
            <Pie
              activeIndex={activeIndex}
              // @ts-ignore
              activeShape={renderActiveShape}
              data={data}
              innerRadius="75%"
              outerRadius="98%"
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              onMouseEnter={onMouseEnter}
            >
              {data.map((item, index) => (
                <Cell
                  // eslint-disable-next-line
                  key={`${index}-${item.value}`}
                  stroke="none"
                  data-index={index}
                  fill={themed('color', item.color)(theme)}
                />
              ))}
            </Pie>
          </RechartPieChart>
        </ResponsiveContainerCustomized>
      </>
    </Panel>
  );
};

export default PieChart;
