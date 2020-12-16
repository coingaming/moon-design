import React from 'react';
import styled from 'styled-components';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

import { Panel } from './private/Panel';
import { Header } from './private/Header';
import ChartIcons from './ChartIcons';
import { VerticalBar } from './private/VerticalBar';
import { Map } from './private/Map';
import { Loader } from './private/Loader';

const Container = styled.div({
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
});

const BarChartContainer = styled.div({
  flex: 1,
  height: '100%',
  overflow: 'auto',
});

type Props = {
  title: string;
  data: {
    label: string | React.ReactNode;
    code: string;
    dataKey: string;
    value: number;
  }[];
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isUpdating?: boolean;
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  icon?: any;
  compact?: boolean;
  positionColor?: ColorProps;
  negativeColor?: ColorProps;
  formatFn?: (props: { value: any; key: string }) => any;
  loaderText?: string | React.ReactNode;
};

const GeoMapChart: React.FC<Props> = ({
  title,
  data,
  onUpdate,
  onShare,
  onExpand,
  isUpdating = false,
  hasUpdates = false,
  filter,
  height = 446,
  icon = <ChartIcons.Countries />,
  compact = false,
  positionColor = 'krillin.100',
  negativeColor = 'whis.100',
  formatFn = ({ value }) => value,
  loaderText = 'No data',
}) => {
  const theme = useTheme();
  const isLoading = !data.length;

  const maxValue = Math.max.apply(null, data.map(({ value }) => value));
  const minValue = Math.min.apply(null, data.map(({ value }) => value));

  const getNormalizedValue = (value: number) => {
    return value === 0 ? 0 : value / (value > 0 ? maxValue : minValue);
  };

  const preparedData = data.map(item => {
    const normalizedValue = getNormalizedValue(item.value);
    const valueToOpacity = normalizedValue < 0.3 ? 0.3 : normalizedValue;

    return {
      ...item,
      value: formatFn({ value: item.value, key: item.dataKey }),
      isNegative: item.value < 0,
      percent: normalizedValue * 100,
      opacity: valueToOpacity,
      color: themed('color', item.value < 0 ? negativeColor : positionColor)(
        theme
      ),
    };
  });

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
        <Container>
          <BarChartContainer>
            {isLoading ? (
              <Loader
                icon={<ChartIcons.BarChartLoading />}
                title={loaderText}
              />
            ) : (
              <VerticalBar withNegative={minValue < 0} data={preparedData} />
            )}
          </BarChartContainer>
          {!compact && <Map data={preparedData} />}
        </Container>
      </>
    </Panel>
  );
};

export default GeoMapChart;
