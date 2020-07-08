import * as React from 'react';
import { useTheme } from '@heathmont/moon-themes';

import Path from './Path';

const VIEWBOX_WIDTH = 100;
const VIEWBOX_HEIGHT = 100;
const VIEWBOX_HEIGHT_HALF = 50;

type CircularProgressbarProps = {
  value: number;
};

const getPathRadius: (strokeWidth: number) => number = strokeWidth =>
  VIEWBOX_HEIGHT_HALF - strokeWidth / 2;

const minValue = 0;
const maxValue = 100;

const getPathRatio: (value: number) => number = value => {
  const boundedValue = Math.min(Math.max(value, minValue), maxValue);
  return (boundedValue - minValue) / (maxValue - minValue);
};

const ProgressBar: React.FC<CircularProgressbarProps> = ({
  value,
  ...props
}) => {
  const { color } = useTheme();
  const strokeWidth = 12;
  const pathRadius = getPathRadius(strokeWidth);
  const pathRatio = getPathRatio(value);

  return (
    <svg
      style={{
        width: '1em',
        height: '1em',
        verticalAlign: 'middle',
      }}
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      {...props}
    >
      <Path
        dashRatio={1}
        pathRadius={pathRadius}
        strokeWidth={strokeWidth}
        style={{ stroke: color.goku[80] }}
      />

      <Path
        dashRatio={pathRatio}
        pathRadius={pathRadius}
        strokeWidth={strokeWidth}
        style={{
          stroke: color.piccolo[100],
          transition: value === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s',
        }}
      />
    </svg>
  );
};

export default ProgressBar;
