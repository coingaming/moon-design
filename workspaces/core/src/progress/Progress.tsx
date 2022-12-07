import React from 'react';
import mergeClassnames from '../utils/mergeClassnames';
import getSize from './private/utils/getSize';
import type Props from './private/types/Props';

const Progress: React.FC<Props> = ({
  size = '2xs',
  value = 0,
  bgColor = 'bg-trunks/[.24]',
  progressColor = 'bg-piccolo',
}) => (
  <div
    className={mergeClassnames(
      'w-full relative rounded-full overflow-hidden',
      bgColor,
      getSize(size)
    )}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuenow={value}
    role="progressbar"
  >
    <span
      style={{ width: `${value}%` }}
      className={mergeClassnames(
        'block absolute h-full rounded-full ltr:left-0 rtl:right-0 transition-all',
        progressColor
      )}
    />
  </div>
);

export default Progress;
