import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

type ChipProps = {
  active?: boolean;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  size?: 'small' | 'medium';
};

const StyledChip = styled.div<ChipProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${rem(8)};
  padding: ${rem(8)};
  line-height: ${({ size }) => (size === 'small' ? rem(16) : rem(20))};
  font-size: ${({ size }) => (size === 'small' ? rem(12) : rem(14))};
  background: ${({ theme, active }) =>
    active ? theme.color.frieza[10] : theme.color.goten[100]};
  color: ${({ theme, active }) =>
    active ? theme.color.frieza[100] : theme.color.bulma[100]};
`;

const IconRightWrapper = styled.span<ChipProps>`
  margin-left: ${rem(8)};
`;

const IconLeftWrapper = styled.span<ChipProps>`
  margin-right: ${rem(8)};
`;

const Chip: React.FC<ChipProps> = ({
  children,
  active,
  size,
  iconLeft,
  iconRight,
}) => {
  console.log(active, size, iconLeft, iconRight, children);

  return (
    <StyledChip
      active={active}
      iconLeft={iconLeft}
      iconRight={iconRight}
      size={size}
    >
      {iconLeft && <IconLeftWrapper size={size}>{iconLeft}</IconLeftWrapper>}
      {children}
      {iconRight && (
        <IconRightWrapper size={size}>{iconRight}</IconRightWrapper>
      )}
    </StyledChip>
  );
};

export default Chip;
