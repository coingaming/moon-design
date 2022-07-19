import React from 'react';
import classNames from '../private/utils/classnames';
import Path from './Path';

const getPathRatio = (value: number) => {
  const minValue = 0;
  const maxValue = 100;
  const boundedValue = Math.min(Math.max(value, minValue), maxValue);
  return (boundedValue - minValue) / (maxValue - minValue);
};

type SizeProps =  '2xs' | 'xs' | 'sm' | 'md' | 'lg';
export type CircularProgressbarProps = {
  value: number;
  fontSize?: any;
  className?: string;
  isRtl?: boolean;
  size?: SizeProps;
  bgColor?: string;
};

const getFontSize = (size?: SizeProps) => {
  switch(size) {
    case '2xs':
      return '1rem';
    case 'xs':
      return '1.5rem';
    case 'sm':
      return '2rem';
    case 'md':
      return '2.5rem'; 
    case 'lg':
      return '3rem'; 
  }
};

const ProgressCircular: React.FC<CircularProgressbarProps> = ({
  value,
  isRtl,
  size = 'md',
  bgColor,
  ...props
}) => {
  const VIEWBOX_WIDTH = 100;
  const VIEWBOX_HEIGHT = 100;
  const PATH_RADIUS = (VIEWBOX_HEIGHT - 8) / 2;


  const pathRatio = getPathRatio(value);

  return (
    <svg
      style={{
        width: '1em',
        height: '1em',
        verticalAlign: 'middle',
      }}
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      fontSize={getFontSize(size)}
      {...props}
    >
      <Path
        dashRatio={1}
        pathRadius={PATH_RADIUS}
        classes={ classNames("stroke-goku stroke-[0.5rem]", bgColor && bgColor)}
      />
      <Path
        dashRatio={pathRatio}
        pathRadius={PATH_RADIUS}
        isRtl={isRtl}
        style={{
          transition: value === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s',
        }}
        classes="stroke-piccolo stroke-[0.5rem]"
      />
    </svg>
  );
};

export default ProgressCircular;
