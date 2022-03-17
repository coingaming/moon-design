import React from 'react';
import { Select, SelectProps } from '@heathmont/moon-select';
import { OrientationType } from './types/OrientationType';

export interface SelectGroupEndProps {
  selectProps: SelectProps<any>;
  orientation?: OrientationType;
  isMulti?: boolean;
  isRtl?: boolean;
}

const SelectGroupStart: React.FC<SelectGroupEndProps> = ({
  selectProps,
  orientation,
  isMulti,
  isRtl,
}) => {
  return (
    <Select
      {...selectProps}
      isMulti={isMulti}
      isSharpRightSide={orientation === 'horizontal' && isRtl}
      isSharpLeftSide={orientation === 'horizontal' && !isRtl}
      isSharpTopSide={orientation === 'vertical'}
    />
  );
};

export default SelectGroupStart;
