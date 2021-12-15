// @ts-nocheck
import React from 'react';
import { components, ClearIndicatorProps } from 'react-select';
import { ControlsClose } from '@heathmont/moon-icons';

const ClearIndicator = ({ ...rest }: ClearIndicatorProps) => (
  <components.ClearIndicator {...rest}>
    <ControlsClose style={{ cursor: 'pointer' }} fontSize="1.5rem" />
  </components.ClearIndicator>
);

export default ClearIndicator;
