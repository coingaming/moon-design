import React from 'react';
import { Select, SelectProps } from '@heathmont/moon-select';
import { OrientationType } from './types/OrientationType';

export interface SelectGroupStartProps {
  selectProps: SelectProps<any>;
  orientation?: OrientationType;
  isMulti?: boolean;
  isRtl?: boolean;
}

const SelectGroupStart: React.FC<SelectGroupStartProps> = ({
  selectProps,
  orientation,
  isMulti,
  isRtl,
}) => {
  return (
    <Select
      {...selectProps}
      isMulti={isMulti}
      isSharpRightSide={orientation === 'horizontal' && !isRtl}
      isSharpLeftSide={orientation === 'horizontal' && isRtl}
      isSharpBottomSide={orientation === 'vertical'}
      isNoBorderBottom={orientation === 'vertical'}
      isNoBorderEnd={orientation === 'horizontal'}
    />
  );
};

export default SelectGroupStart;
