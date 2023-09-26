import React from 'react';
import type LoaderProps from './private/types/LoaderProps';
import setDivBorder from './private/utils/setDivBorder';
import setSize from './private/utils/setSize';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const commonStyles =
  'loader absolute w-full h-full rounded-full animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-x-transparent border-b-transparent';

const Loader = ({
  color = 'border-hit',
  size = 'md',
  ariaLabel = 'Loading',
}: LoaderProps) => (
  <div
    aria-label={ariaLabel}
    role="alert"
    aria-busy="true"
    className={mergeClassnames(
      setSize(size),
      'relative rounded-full rtl:-scale-x-100'
    )}
  >
    <svg>
      <circle cx="20" cy="20" r="18"></circle>
    </svg>
  </div>
);

export default Loader;
