import React from 'react';

import IconToastInfo from '../private/icons/IconToastInfo';
import IconToastError from '../private/icons/IconToastError';
import IconToastWarning from '../private/icons/IconToastWarning';
import IconToastSuccess from '../private/icons/IconToastSuccess';

export interface Variants {
  variant?: 'error' | 'warning' | 'info' | 'success';
}

const Variants = {
  error: <IconToastError fontSize="1.5rem" />,
  warning: <IconToastWarning fontSize="1.5rem" />,
  info: <IconToastInfo fontSize="1.5rem" />,
  success: <IconToastSuccess fontSize="1.5rem" />,
};

const ToastIcon: React.FC<Variants> = ({ variant }) => {
  if (variant && variant in Variants) {
    return Variants[variant];
  }
  return null;
};

export default ToastIcon;
