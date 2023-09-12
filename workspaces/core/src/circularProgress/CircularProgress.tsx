import React from 'react';
import Path from './private/Path';
import type Props from './private/types/Props';
import getPathRatio from './private/utils/getPathRatio';
import getSize from './private/utils/getSize';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const CircularProgress = ({
  value = 0,
  size = 'md',
  bgColor, // deprecated
  progressColor, // deprecated
  className,
}: Props) => {
  const PATH_RADIUS = 46;
  const pathRatio = getPathRatio(value);
  return (
    <svg
      viewBox="0 0 100 100"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      role="progressbar"
      className={mergeClassnames(getSize(size), className)}
    >
      <Path
        dashRatio={1}
        pathRadius={PATH_RADIUS}
        classes={mergeClassnames(
          'background stroke-[0.5rem] stroke-trunks/[.24]',
          bgColor /* deprecated */
        )}
      />
      <Path
        dashRatio={pathRatio}
        pathRadius={PATH_RADIUS}
        classes={mergeClassnames(
          'progress stroke-[0.5rem] rtl:-scale-x-100 rtl:translate-x-full stroke-piccolo',
          'transition-[stroke-dashoffset]',
          progressColor // deprecated
        )}
      />
    </svg>
  );
};

export default CircularProgress;
