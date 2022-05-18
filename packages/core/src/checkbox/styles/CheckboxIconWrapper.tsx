import React, { useEffect, useState } from 'react';
import Text from '../../text/Text';
import Animation from './Animation';
import Box from './Box';
import Wrapper from './Wrapper';
import type CheckboxIconWrapperProps from '../private/types/CheckboxIconWrapperProps';

const CheckboxIconWrapper: React.FC<CheckboxIconWrapperProps> = ({
  checked,
  dir,
  label,
}) => {
  const [prevChecked, setPrevChecked] = useState(checked);
  const renderLabel = <Text size={14}>{label}</Text>;
  useEffect(() => {
    if (checked !== prevChecked) {
      setTimeout(() => {
        setPrevChecked(checked);
      }, 500);
    }
  }, [checked]);
  return (
    <Wrapper>
      {dir === 'rtl' && label && renderLabel}
      <Box>
        <Animation checked={checked} animate={prevChecked !== checked} />
      </Box>
      {dir !== 'rtl' && label && renderLabel}
    </Wrapper>
  );
};

export default CheckboxIconWrapper;
