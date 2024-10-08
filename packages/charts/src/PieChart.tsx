import React, { useState, useEffect } from 'react';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import {
  Pie,
  Sector,
  Cell,
  PieChart as RechartPieChart,
  Tooltip as RechartTooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import ChartIcons from './ChartIcons';
import { Header } from './private/Header';
import { Loader } from './private/Loader';
import { Panel } from './private/Panel';
import { Tooltip } from './private/Tooltip';

const ResponsiveContainerCustomized = styled(ResponsiveContainer)(
  ({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexGrow: 1,
    '.charts-title': {
      fill: theme.colorNew.trunks,
      fontSize: rem(14),
    },
    '.chart-percent': {
      fill: theme.colorNew.bulma,
      fontSize: rem(24),
    },
  })
);

type Props = {
  title: string;
  data: {
    label: string;
    value: number;
    color: ColorProps;
    dataKey: string;
  }[];
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isUpdating?: boolean;
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  icon?: React.ReactNode;
  formatFn?: (props: { value: any; key: string }) => any;
  loaderText?: string | React.ReactNode;
};

const PieChart: React.FC<Props> = ({
  title,
  data,
  onUpdate,
  onShare,
  onExpand,
  isUpdating = false,
  hasUpdates = false,
  filter,
  height = 446,
  icon = <ChartIcons.Devices />,
  formatFn = ({ value }) => value,
  loaderText = 'No data',
}) => {
  const theme = useTheme();
  const colorShadow = themed('color', 'bulma.100')(theme);
  const [activeIndex, setActiveIndex] = useState(
    data.length ? data.length - 1 : 0
  );

  useEffect(
    () => setActiveIndex(data.length ? data.length - 1 : 0),
    [data.length]
  );

  const onMouseEnter = (event: React.MouseEvent & { 'data-index': number }) => {
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
        <filter id="shadow">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor={colorShadow}
            floodOpacity="0.25"
          />
        </filter>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          style={{ filter: 'url(#shadow)' }}
          cornerRadius={100}
          onMouseOver={(e) => {
            if (!e || !e.currentTarget) return;
            const sector = e.currentTarget.closest('.recharts-pie-sector');
            if (!sector || !sector.parentElement) return;
            const container = sector.parentElement;
            if (!container) return;
            container.appendChild(sector);
          }}
        />
      </g>
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
          <Loader icon={<ChartIcons.PieChartLoading />} title={loaderText} />
        ) : (
          <ResponsiveContainerCustomized>
            <RechartPieChart>
              <RechartTooltip
                coordinate={{
                  x: -20,
                  y: -20,
                }}
                content={<Tooltip formatFn={formatFn} />}
              />
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                innerRadius="75%"
                outerRadius="100%"
                startAngle={90}
                endAngle={-270}
                minAngle={40}
                paddingAngle={-14}
                dataKey="value"
                cornerRadius="100%"
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
        )}
      </>
    </Panel>
  );
};

export default PieChart;
