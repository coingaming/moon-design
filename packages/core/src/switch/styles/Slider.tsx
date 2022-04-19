import React from 'react';
import {IconMoon, IconSun} from "@heathmont/moon-assets";
import {inlineSvg, rem} from "@heathmont/moon-utils";
import rgba from "polished/lib/color/rgba";
import styled from "styled-components";
import Size from "../types/Size";

type SliderOptions = {
  colorScheme?: boolean;
  checked?: boolean;
  disabled?: boolean;
  size?: Size;
  button?: boolean;
  isRtl?: boolean;
  switchHeight?: string;
  switchWidth?: string;
};

const Slider = styled.span<SliderOptions>(({
 colorScheme,
 checked,
 size,
 button,
 switchHeight,
 switchWidth,
 isRtl,
 theme: { color, space, transitionDuration, newTokens },
}) => ({
    position: 'absolute',
    width: switchWidth,
    height: switchHeight,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    cursor: 'pointer',
    backgroundColor: colorScheme && checked ? color.bulma[100] : color.beerus[100],
    backgroundImage: colorScheme
      ? `${inlineSvg(<IconMoon style={{ color: color.trunks[100] }}/>)}, ${inlineSvg(<IconSun />)}`
      : undefined,
    backgroundPosition: `left ${
      size === '2xs' ? rem(space.xsmall) : rem(space.small)
    } center, right calc(${
      size === '2xs' ? rem(space.xsmall) : rem(space.small)
    } * 0.7) center`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `calc(${switchHeight} - (${
      size === '2xs' ? rem(space.xsmall) : rem(space.small)
    } * 1.4))`,
    borderRadius: button ? rem(12) : `calc(${switchWidth} + ${rem(2)})`,
    transitionProperty: 'background-color',
    transitionDuration: `${transitionDuration.slow}s`,
    transitionTimingFunction: 'ease',
    '&::before': {
      '--switch-indicator-size': `calc(${switchHeight} - ${
        size === '2xs' ? rem(space.xsmall) : rem(space.small)
      })`,
      content: '""',
      position: 'absolute',
      width: button ? `calc(50% - ${rem(space.xsmall)})` : 'var(--switch-indicator-size)',
      height: 'var(--switch-indicator-size)',
      left: isRtl ? 'initial' : rem(space.xsmall),
      right: isRtl ? rem(space.xsmall) : 'initial',
      bottom: size !== '2xs' ? rem(space.xsmall) :
        `calc(${rem(space.xsmall)} / 2)`,
      backgroundColor: color.goten[100],
      borderRadius: button ? rem(8) : '50%',
      transition: `all ${newTokens.transition.default}`,
      willChange: 'transform',
      boxShadow: `0px 6px 6px ${rgba(
        color.popo[100],
        0.16
      )}, 0px 0px 1px ${rgba(
        color.popo[100],
        0.4
      )}`
    },
    '& > span > p:first-child': {
      color: checked ? color.goten[100] : color.bulma[100]
    }
  })
);

export default Slider;
