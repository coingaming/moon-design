import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import type AvatarProps from '../private/types/AvatarProps';
import setStatusDeprecatedSize from '../private/utils/setStatusDeprecatedSize';

const StatusDeprecated = ({ size, statusOrigin }: AvatarProps) => (
  <div
    className={mergeClassnames(
      'absolute border-solid border-goku rounded-full bg-roshi',
      statusOrigin && statusOrigin.vertical === 'top' && 'top-0',
      statusOrigin && statusOrigin.vertical === 'bottom' && 'bottom-0',
      statusOrigin && statusOrigin.horizontal === 'left' && 'start-0',
      statusOrigin && statusOrigin.horizontal === 'right' && 'end-0',
      setStatusDeprecatedSize(size)
    )}
  />
);

export default StatusDeprecated;
