import React from 'react';
import classNames from '../private/utils/classnames';
import getSize from './private/utils/getSize';
import type Props from './private/types/Props';

const Progress: React.FC<Props> = ({
  size = '2xs',
  value = 0,
  bgColor = 'bg-trunks/[.24]',
  progressColor = 'bg-piccolo',
}) => (
  <div
    className={classNames(
      'w-full relative rounded-full overflow-hidden',
      bgColor,
      getSize(size)
    )}
  >
    <span
      style={{ width: `${value}%` }}
      className={classNames(
        'block absolute h-full rounded-full ltr:left-0 rtl:right-0 transition-all',
        progressColor
      )}
    />
  </div>
);

export default Progress;
