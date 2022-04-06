import React from 'react';

import IconToastError from '../icons/IconToastError';
import IconToastInfo from '../icons/IconToastInfo';
import IconToastSuccess from '../icons/IconToastSuccess';
import IconToastWarning from '../icons/IconToastWarning';

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
