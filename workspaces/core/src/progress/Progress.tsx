import React, { useContext } from 'react';
import type PinProps from './private/types/PinProps';
import type Props from './private/types/Props';
import getPinStyle from './private/utils/getPinStyle';
import getSize from './private/utils/getSize';
import ProgressContext from './private/utils/ProgressContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const ProgressRoot = ({
  size = '2xs',
  value = 0,
  bgColor, // deprecated
  progressColor, // deprecated
  className,
  children,
}: Props) => (
  <ProgressContext.Provider value={{ value, size }}>
    <div
      className={mergeClassnames(
        'w-full rounded-full bg-beerus',
        bgColor,
        getSize(size),
        className
      )}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      role="progressbar"
      aria-label={`${value}%`}
    >
      <div
        style={{ width: `${value}%` }}
        className={mergeClassnames(
          'progress relative h-full rounded-full start-0 transition-all bg-piccolo',
          progressColor
        )}
      >
        {children}
      </div>
    </div>
  </ProgressContext.Provider>
);

const Pin = ({ className }: PinProps) => {
  const { value, size } = useContext(ProgressContext);
  const displayValue = Math.round(value || 0) + '%';
  return (
    <div
      className={mergeClassnames(
        'absolute box-content flex items-center justify-center w-8 h-8 border-2 font-medium',
        'text-moon-10-caption uppercase text-goten bg-popo border-goten rounded-full',
        'shadow-[0_2px_8px_0_rgba(0,0,0,0.16)] before:shadow-[0_2px_8px_0_rgba(0,0,0,0.16)]',
        'before:absolute before:bg-goten before:rounded-full',
        'after:absolute after:w-0 after:h-0 after:border-x-4 after:border-x-transparent',
        'after:-bottom-[6px] after:border-t-[6px] after:border-t-goten',
        getPinStyle(size),
        className
      )}
    >
      {displayValue}
    </div>
  );
};

const Progress = Object.assign(ProgressRoot, { Pin });

export default Progress;
