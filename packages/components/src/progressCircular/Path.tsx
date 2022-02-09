import React from 'react';

export const VIEWBOX_CENTER_X = 50;
export const VIEWBOX_CENTER_Y = 50;

type Coordinate = {
  x: number;
  y: number;
};

type PathProps = {
  dashRatio: number;
  pathRadius: number;
  strokeWidth: number;
  center?: Coordinate;
  style?: object;
  isRtl?: boolean;
};

const getPathDescription = (
  pathRadius: number,
  center: Coordinate = { x: VIEWBOX_CENTER_X, y: VIEWBOX_CENTER_Y }
): string => `
      M ${center.x},${center.y}
      m 0,-${pathRadius}
      a ${pathRadius},${pathRadius} 0 1 1 0,${2 * pathRadius}
      a ${pathRadius},${pathRadius} 0 1 1 0,-${2 * pathRadius}
    `;

type DashStyleProps = {
  dashRatio: number;
  pathRadius: number;
  isRtl?: boolean;
};
const getDashStyle = ({ dashRatio, pathRadius, isRtl }: DashStyleProps) => {
  const circumference = Math.PI * 2 * pathRadius;
  const gapLength = (1 - dashRatio) * circumference * (isRtl === true ? -1 : 1);

  return {
    strokeDasharray: `${circumference}px ${circumference}px`,
    strokeDashoffset: `${gapLength}px`,
  };
};

const Path: React.FC<PathProps> = ({
  dashRatio,
  pathRadius,
  strokeWidth,
  style,
  center,
  isRtl,
}) => (
  <path
    style={{ ...style, ...getDashStyle({ pathRadius, dashRatio, isRtl }) }}
    d={getPathDescription(pathRadius, center)}
    strokeWidth={strokeWidth}
    fillOpacity={0}
  />
);

export default Path;
