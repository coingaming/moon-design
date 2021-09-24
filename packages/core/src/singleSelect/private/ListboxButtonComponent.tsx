import React from 'react';

import Primary from './variants/Primary';
import Secondary from './variants/Secondary';
import PrimaryControled from './variants/PrimaryControled';
import SecondaryControled from './variants/SecondaryControled';

interface ListboxButtonContainerProps {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  isExpanded?: boolean;
  inputSize?: 'small' | 'medium';
  controlledValue?: string;
  error?: boolean;
  selectLabel?: JSX.Element | string;
}

const ListboxButtonComponent: React.FC<ListboxButtonContainerProps> = (
  props
) => {
  const { variant, controlledValue } = props;
  if (variant === 'secondary') {
    if (controlledValue) {
      return <SecondaryControled {...props} />;
    }
    return <Secondary {...props} />;
  }
  if (controlledValue) {
    return <PrimaryControled {...props} />;
  }
  return <Primary {...props} />;
};

export default ListboxButtonComponent;
