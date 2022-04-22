import React, { useState } from 'react';
import Size from '../private/enums/Size';
import StyledChip from './styles/StyledChip';
import type ChipProps from './private/types/ChipProps';

const Chip: React.FC<ChipProps> = ({
  children,
  isActive,
  size = Size.MEDIUM,
  iconSize = 24,
  iconLeft,
  iconRight,
  iconOnly,
  ...rest
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledChip
      isActive={isActive}
      iconLeft={iconLeft}
      iconRight={iconRight}
      size={size}
      iconSize={iconSize}
      iconOnly={iconOnly}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconOnly}
      {iconRight}
    </StyledChip>
  );
};

export default Chip;
