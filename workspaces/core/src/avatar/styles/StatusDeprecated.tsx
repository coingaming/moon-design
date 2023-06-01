import React from 'react';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import setStatusDeprecatedSize from '../private/utils/setStatusDeprecatedSize';
import type AvatarProps from '../private/types/AvatarProps';

const StatusDeprecated: React.FC<AvatarProps> = ({ size, statusOrigin }) => (
  <div
    className={mergeClassnames(
      'absolute border-solid border-beerus rounded-full bg-roshi',
      statusOrigin && statusOrigin.vertical === 'top' && 'top-0',
      statusOrigin && statusOrigin.vertical === 'bottom' && 'bottom-0',
      statusOrigin &&
        statusOrigin.horizontal === 'left' &&
        'ltr:left-0 rtl:right-0',
      statusOrigin &&
        statusOrigin.horizontal === 'right' &&
        'ltr:right-0 rtl:left-0',
      setStatusDeprecatedSize(size)
    )}
  />
);

export default StatusDeprecated;
