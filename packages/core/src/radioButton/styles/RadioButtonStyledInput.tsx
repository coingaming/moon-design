import React from 'react';
import { ColorValue, Theme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import { lighten } from 'polished';
import styled, { css, keyframes } from 'styled-components';

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
    opacity: .5;
  }

  80% {
    transform: translate(-50%, -50%) scale(1);
    opacity: .1;
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
`;

interface Props {
  animate?: boolean;
}

type InputColors = {
  label: ColorValue;
  text: ColorValue;
  icon: ColorValue;
  placeholder: ColorValue;
  borderDefault: ColorValue;
  borderHover: ColorValue;
  background: ColorValue;
  disabled: ColorValue;
  [key: string]: ColorValue;
};

const inputColors =
  (key: keyof InputColors) =>
  ({ color, colorNew }: Theme) => {
    const themedColor: InputColors = {
      label: colorNew.trunks,
      text: colorNew.bulma,
      icon: colorNew.trunks,
      placeholder: colorNew.trunks,
      borderDefault: colorNew.beerus,
      borderHover: color.goku[40],
      background: colorNew.gohan,
      disabled: color.goku[80],
    };

    return themedColor[key];
  };

const Content = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: inputColors('label')(theme),
  borderRadius: '50%',
  width: rem(24),
  height: rem(24),
  minWidth: rem(24),
  minHeight: rem(24),
  position: 'relative',
  transition: 'background-color 0.4s',
  marginRight: theme.newTokens.space.threexsmall,
  zIndex: 2,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  '&::before': {
    content: '""',
    width: rem(8),
    height: rem(8),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(0)',
    transition: 'all .3s',
    borderRadius: '50%',
    backgroundColor: theme.colorNew.piccolo,
    zIndex: 2,
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
    boxShadow: `inset 0 0 0 0.1rem ${theme.colorNew.trunks}`,
    borderRadius: '50%',
    backgroundColor: 'transparent',
    transitionProperty: 'border-color',
  },
}));

const Animation = styled.div<{ animate?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: ${rem(9999)};
  z-index: 1;
  transform: translate(-50%, -50%) scale(0);
  background-color: ${({ theme }) =>
    css`
      ${lighten(0.4, theme.colorNew.piccolo)}
    `};
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

const RadioButtonStyledInput: React.FC<Props> = ({ animate }) => {
  return (
    <Content>
      <Animation animate={animate} />
    </Content>
  );
};

export default RadioButtonStyledInput;
