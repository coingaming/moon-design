import React, { useEffect, useState } from 'react';
import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import { Text } from '../../';

interface Props {
  checked?: boolean;
  label?: string | JSX.Element;
  dir?: 'ltr' | 'rtl' | 'auto';
}

/**
 * Border radius calculation
 */
const calcBorderRadius = (
  interactiveValue: string | number,
  fallbackValue: string | number
) => {
  let value = fallbackValue;
  if (
    interactiveValue === 0 ||
    interactiveValue === rem(0) ||
    interactiveValue === rem(9999)
  ) {
    value = interactiveValue;
  }
  return value;
};

/**
 * Animation
 */
const explode = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: .4;
  }
  80% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
`;

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  gap: theme.newTokens.space.twoxsmall,
}));

const Box = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colorNew.trunks,
  borderRadius: calcBorderRadius(
    theme.newTokens.borderRadius.interactive,
    theme.newTokens.borderRadius.xsmall
  ),
  width: rem(24),
  height: rem(24),
  position: 'relative',
  transition: 'background-color 0.4s',
  zIndex: 2,
  '&:hover': {
    backgroundColor: rgba(theme.colorNew.bulma, 0.12),
  },
  '&::after': {
    content: '""',
    width: rem(16),
    height: rem(16),
    transition: theme.newTokens.transition.default,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: `inset 0 0 0 ${rem(1)} ${theme.colorNew.trunks}`,
    borderRadius: calcBorderRadius(
      theme.newTokens.borderRadius.interactive,
      theme.newTokens.borderRadius.xsmall
    ),
    backgroundColor: 'transparent',
    transitionProperty: 'border-color',
  },
}));

const Animation = styled.div<{ checked?: boolean; animate?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 1;
  transform: translate(-50%, -50%) scale(0);
  background-color: ${({ theme, checked }) =>
    checked
      ? `
          ${rgba(theme.colorNew.piccolo, 0.12)}
        `
      : `${rgba(theme.colorNew.bulma, 0.12)}`};
  opacity: ${({ theme }) =>
    css`
      ${theme.newTokens.opacity}
    `};
  animation: ${({ animate }) =>
    animate
      ? css`
          ${explode} .7s cubic-bezier(0.7, 0.7, 0.7, 1)
        `
      : 'none'};
`;

const CheckboxIconWrapper: React.FC<Props> = ({ checked, dir, label }) => {
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
