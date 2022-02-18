import React from 'react';
import { useTheme } from '@heathmont/moon-themes';

import Path from './Path';

const getPathRatio = (value: number) => {
  const minValue = 0;
  const maxValue = 100;
  const boundedValue = Math.min(Math.max(value, minValue), maxValue);
  return (boundedValue - minValue) / (maxValue - minValue);
};

export type CircularProgressbarProps = {
  value: number;
  fontSize?: any;
  strokeWidth?: number;
  className?: string;
  isRtl?: boolean;
};

const ProgressCircular: React.FC<CircularProgressbarProps> = ({
  value,
  strokeWidth = 12,
  isRtl,
  ...props
}) => {
  const VIEWBOX_WIDTH = 100;
  const VIEWBOX_HEIGHT = 100;
  const PATH_RADIUS = (VIEWBOX_HEIGHT - strokeWidth) / 2;

  const { color } = useTheme();

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
        pathRadius={PATH_RADIUS}
        strokeWidth={strokeWidth}
        style={{ stroke: color.goku[80] }}
      />
      <Path
        dashRatio={pathRatio}
        pathRadius={PATH_RADIUS}
        strokeWidth={strokeWidth}
        isRtl={isRtl}
        style={{
          stroke: color.piccolo[100],
          transition: value === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s',
        }}
      />
    </svg>
  );
};

export default ProgressCircular;
