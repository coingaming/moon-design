import React, {useEffect, useState} from 'react';
import { ColorValue, Theme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import { lighten } from "polished";
import styled, {css, keyframes} from 'styled-components';

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

interface Props {
  checked?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
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

const Wrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: rem(40),
  height: rem(40)
}));

const Content = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: inputColors('label')(theme),
  borderRadius: theme.newTokens.borderRadius.xsmall,
  width: rem(24),
  height: rem(24),
  position: 'relative',
  transition: 'background-color 0.4s',
  zIndex: 2,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
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
    borderRadius: theme.newTokens.borderRadius.xsmall,
    backgroundColor: 'transparent',
    transitionProperty: 'border-color',
  },
}));

const Animation = styled.div<{ checked?: boolean, animate?: boolean }>`
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
      ? css`${lighten(0.315, theme.colorNew.piccolo)}`
      : css`rgba(0, 0, 0, 0.12)`
  };
  opacity: ${({ theme }) => css`${theme.newTokens.opacity}`};
  animation: ${({ animate }) =>
    animate
      ? css`${explode} .7s cubic-bezier(0.7, 0.7, 0.7, 1)`
      : 'none'
  };
`;

const CheckboxIconWrapper: React.FC<Props> = ({
  checked,
  dir
}) => {
  const [prevChecked, setPrevChecked] = useState(checked)

  useEffect(() => {
    if (checked !== prevChecked) {
      setTimeout(() => {
        setPrevChecked(checked)
      }, 500)
    }
  }, [checked])

  return (<Wrapper>
    <Content dir={dir} />
    <Animation
      checked={checked}
      animate={prevChecked !== checked}
    />
  </Wrapper>);
};

export default CheckboxIconWrapper;
