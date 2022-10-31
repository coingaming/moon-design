import React from 'react';
import classNames from '../private/utils/classnames';
import Path from './private/Path';
import getPathRatio from './private/utils/getPathRatio';
import getSize from './private/utils/getSize';
import type Props from './private/types/Props';

const CircularProgress: React.FC<Props> = ({
  value = 0,
  size = 'md',
  bgColor = 'stroke-trunks/[.24]',
  progressColor = 'stroke-piccolo',
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
      fontSize={getSize(size)}
    >
      <Path
        dashRatio={1}
        pathRadius={PATH_RADIUS}
        classes={classNames('stroke-[0.5rem]', bgColor)}
      />
      <Path
        dashRatio={pathRatio}
        pathRadius={PATH_RADIUS}
        style={{
          transition: value === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s',
        }}
        classes={classNames('stroke-[0.5rem]', progressColor)}
      />
    </svg>
  );
};

export default CircularProgress;
