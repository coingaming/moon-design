import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import type AvatarProps from '../private/types/AvatarProps';
import getStatusDeprecatedSize from '../private/utils/getStatusDeprecatedSize';

const StatusDeprecated = ({ size, statusOrigin }: AvatarProps) => (
  <div
    className={mergeClassnames(
      'absolute border-solid border-gohan rounded-full bg-roshi',
      statusOrigin && statusOrigin.vertical === 'top' && 'top-0',
      statusOrigin && statusOrigin.vertical === 'bottom' && 'bottom-0',
      statusOrigin && statusOrigin.horizontal === 'left' && 'start-0',
      statusOrigin && statusOrigin.horizontal === 'right' && 'end-0',
      getStatusDeprecatedSize(size)
    )}
  />
);

export default StatusDeprecated;
