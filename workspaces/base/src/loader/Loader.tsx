import React from 'react';
import type LoaderProps from './private/types/LoaderProps';
import setDivBorder from './private/utils/setDivBorder';
import setSize from './private/utils/setSize';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const Loader = ({
  color = 'border-hit',
  size = 'md',
  ariaLabel = 'Loading',
}: LoaderProps) => (
  <div
    aria-label={ariaLabel}
    role="alert"
    aria-busy="true"
    className={mergeClassnames(setSize(size), 'relative rounded-full')}
  >
    <div
      className={mergeClassnames(
        setDivBorder(size),
        color,
        'absolute w-full h-full rounded-full animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-x-transparent border-b-transparent'
      )}
      style={{ animationDelay: '-0.45s' }}
      role="presentation"
    />
    <div
      className={mergeClassnames(
        setDivBorder(size),
        color,
        'absolute w-full h-full rounded-full animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-x-transparent border-b-transparent'
      )}
      style={{ animationDelay: '-0.3s' }}
      role="presentation"
    />
    <div
      className={mergeClassnames(
        setDivBorder(size),
        color,
        'absolute w-full h-full rounded-full animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-x-transparent border-b-transparent'
      )}
      style={{ animationDelay: '-0.15s' }}
      role="presentation"
    />
    <div
      className={mergeClassnames(
        setDivBorder(size),
        color,
        'absolute w-full h-full rounded-full animate-[rotation_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] border-x-transparent border-b-transparent'
      )}
      role="presentation"
    />
  </div>
);

export default Loader;
