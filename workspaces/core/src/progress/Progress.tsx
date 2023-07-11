import React, { useContext } from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import getPinStyle from './private/utils/getPinStyle';
import getSize from './private/utils/getSize';
import ProgressContext from './private/utils/ProgressContext';
import type PinProps from './private/types/PinProps';
import type Props from './private/types/Props';

const ProgressRoot: React.FC<Props> = ({
  size = '2xs',
  value = 0,
  bgColor, // deprecated
  progressColor, // deprecated
  className,
  children,
}) => (
  <ProgressContext.Provider value={{ value, size }}>
    <div
      className={mergeClassnames(
        'w-full relative rounded-full bg-trunks/[.24]',
        bgColor,
        getSize(size),
        className
      )}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      role="progressbar"
    >
      <div
        style={{ width: `${value}%` }}
        className={mergeClassnames(
          'progress absolute h-full rounded-full ltr:left-0 rtl:right-0 transition-all bg-piccolo',
          progressColor
        )}
      >
        {children}
      </div>
    </div>
  </ProgressContext.Provider>
);

const Pin: React.FC<PinProps> = ({ className }) => {
  const { value, size } = useContext(ProgressContext);
  const displayValue = Math.round(value || 0) + '%';
  return (
    <div
      className={mergeClassnames(
        'absolute box-content flex items-center justify-center w-8 h-8 border-2 font-medium',
        'text-moon-10-caption uppercase text-goten bg-popo border-goten rounded-full',
        'shadow-[0_2px_8px_0_rgba(0,0,0,0.16)]',
        'before:absolute before:bg-goten before:rounded-full',
        'before:shadow-[0_2px_8px_0_rgba(0,0,0,0.16)]',
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
