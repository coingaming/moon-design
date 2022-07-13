import React from 'react';
import { inlineSvg, rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import IconMoon from '../private/assets/IconMoon';
import IconSun from '../private/assets/IconSun';
import setIconPosition from '../private/utils/setIconPosition';
import setIconSize from '../private/utils/setIconSize';
import setTogglePosition from '../private/utils/setTogglePosition';
import type SliderProps from '../private/types/SliderProps';

const Slider = styled.span<SliderProps>(
  ({
    colorScheme,
    checked,
    size,
    button,
    switchHeight,
    switchWidth,
    isRtl,
    theme: { colorNew, newTokens },
  }) => ({
    position: 'absolute',
    width: switchWidth,
    height: switchHeight,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    cursor: 'pointer',
    backgroundColor: colorScheme && checked ? colorNew.bulma : colorNew.beerus,
    backgroundImage: colorScheme
      ? `${inlineSvg(
          <IconMoon style={{ color: colorNew.trunks }} />
        )}, ${inlineSvg(<IconSun />)}`
      : undefined,
    backgroundPosition: `left ${setIconPosition(
      size
    )} center, right calc(${setIconPosition(size)} * 0.7) center`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: setIconSize(size),
    borderRadius: button ? rem(12) : `calc(${switchWidth} + ${rem(2)})`,
    transitionProperty: 'background-color',
    transitionDuration: newTokens.transition.slow,
    transitionTimingFunction: 'ease',
    '&::before': {
      '--switch-indicator-size': `calc(${switchHeight} - ${setIconPosition(
        size
      )})`,
      content: '""',
      position: 'absolute',
      width: button ? `calc(50% - ${rem(4)})` : 'var(--switch-indicator-size)',
      height: 'var(--switch-indicator-size)',
      left: isRtl ? 'initial' : setTogglePosition(size),
      right: isRtl ? setTogglePosition(size) : 'initial',
      bottom: setTogglePosition(size),
      backgroundColor: colorNew.goten,
      borderRadius: button ? rem(8) : '50%',
      transition: `all ${newTokens.transition.default}`,
      willChange: 'transform',
      boxShadow: newTokens.boxShadow.small,
    },
    '& > span > p:first-child': {
      color: checked ? colorNew.goten : colorNew.bulma,
    },
  })
);

export default Slider;
