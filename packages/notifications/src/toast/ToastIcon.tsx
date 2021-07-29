import React from 'react';

import IconToastInfo from '../icons/IconToastInfo';
import IconToastError from '../icons/IconToastError';
import IconToastWarning from '../icons/IconToastWarning';
import IconToastSuccess from '../icons/IconToastSuccess';

export interface VariantsInterface {
  variant?: 'error' | 'warning' | 'info' | 'success';
}

const Variants = {
  error: <IconToastError fontSize="1.5rem" />,
  warning: <IconToastWarning fontSize="1.5rem" />,
  info: <IconToastInfo fontSize="1.5rem" />,
  success: <IconToastSuccess fontSize="1.5rem" />,
};

const ToastIcon: React.FC<VariantsInterface> = ({ variant }) => {
  if (variant && variant in Variants) {
    return Variants[variant];
  }
  return null;
};

export default ToastIcon;
