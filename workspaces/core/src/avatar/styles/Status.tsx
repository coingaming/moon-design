import React from 'react';
import classNames from '../../private/utils/classnames';
import setStatusSize from '../private/utils/setStatusSize';
import type AvatarProps from '../private/types/AvatarProps';

const Status: React.FC<AvatarProps> = ({ size, statusOrigin }) => (
  <div
    className={classNames(
      'absolute border-solid border-beerus rounded-full bg-roshi',
      statusOrigin && statusOrigin.vertical === 'top' && 'top-0',
      statusOrigin && statusOrigin.vertical === 'bottom' && 'bottom-0',
      statusOrigin &&
        statusOrigin.horizontal === 'left' &&
        'ltr:left-0 rtl:right-0',
      statusOrigin &&
        statusOrigin.horizontal === 'right' &&
        'ltr:right-0 rtl:left-0',
      setStatusSize(size)
    )}
  />
);

export default Status;
