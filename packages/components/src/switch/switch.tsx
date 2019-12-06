import * as React from 'react';
import styled, { CSSObject } from 'styled-components';
import { rem, uniqueId, inlineSVG } from '@heathmont/sportsbet-utils';
import { hideVisually } from 'polished';
import { ColorScheme } from '@heathmont/sportsbet-themes';
import { IconMoon, IconSun } from '@heathmont/sportsbet-assets';

import { Inline } from '../inline/inline';

const switchWidthProperty = '--switch-width';
const switchWidth = `var(${switchWidthProperty})`;

const switchHeightProperty = '--switch-height';
const switchHeight = `var(${switchHeightProperty})`;

type SliderColorScheme = {
  colorScheme?: boolean;
};

const indicatorBoxShadow = (
  themeColorScheme: ColorScheme
): CSSObject['boxShadow'] =>
  `0px 2.3px 4px rgba(0,0,0,0.${themeColorScheme === 'dark' ? 408 : 108})`;

const Caption = styled.span(({ theme: { color, fontWeight } }) => ({
  color: color.trunks[100],
  fontWeight: fontWeight.semibold,
}));

const Slider = styled.span<SliderColorScheme>(
  ({
    colorScheme,
    theme: { color, colorScheme: themeColorScheme, space, transitionDuration },
  }) => ({
    position: 'absolute',
    width: switchWidth,
    height: switchHeight,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    cursor: 'pointer',
    backgroundColor: colorScheme ? color.gohan[100] : color.goku[80],
    backgroundImage: colorScheme
      ? `${inlineSVG(<IconMoon />)}, ${inlineSVG(<IconSun />)}`
      : undefined,
    backgroundPosition: `left ${rem(space.small)} center, right ${rem(
      space.small
    )} center`,
    backgroundRepeat: 'no-repeat',
    borderRadius: `calc(${switchWidth} + ${rem(2)})`,
    transitionProperty: 'background-color',
    transitionDuration: `${transitionDuration.slow}s`,
    transitionTimingFunction: 'ease',
    '&::before': {
      '--switch-indicator-size': `calc(${switchHeight} - ${rem(space.small)})`,
      content: '""',
      position: 'absolute',
      width: 'var(--switch-indicator-size)',
      height: 'var(--switch-indicator-size)',
      left: rem(space.xsmall),
      bottom: rem(space.xsmall),
      backgroundColor: themeColorScheme ? color.goku[100] : color.trunks[100],
      boxShadow: colorScheme ? indicatorBoxShadow(themeColorScheme) : undefined,
      borderRadius: '50%',
      transition: 'inherit',
      transitionProperty: 'background-color, transform',
      willChange: 'transform',
    },
  })
);

const Label = styled.label(({ theme: { space } }) => ({
  [switchWidthProperty]: rem(space.large * 2),
  [switchHeightProperty]: rem(space.large),
  position: 'relative',
  display: 'inline-block',
  width: switchWidth,
  height: switchHeight,
  flexShrink: 0,
}));

const Input = styled.input<SliderColorScheme>(
  ({ colorScheme, theme: { color } }) => ({
    ...hideVisually(),
    [`&:checked + ${Slider}`]: {
      backgroundColor: colorScheme ? undefined : color.piccolo[100],
      '&::before': {
        backgroundColor: colorScheme ? undefined : color.goten[100],
        transform: `translateX(calc(${switchWidth} / 2))`,
      },
    },
  })
);

Input.defaultProps = {
  type: 'checkbox',
};

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type SwitchProps = {
  id?: HTMLInputProps['id'];
  checked?: HTMLInputProps['checked'];
  className?: string;
  captionUnchecked?: string;
  captionChecked?: string;
} & SliderColorScheme;

export const Switch: React.FC<SwitchProps> = ({
  className,
  captionChecked,
  captionUnchecked,
  id,
  checked,
  colorScheme,
  ...props
}) => {
  const autoId = id || `Switch-${uniqueId()}`;

  const labelProps = {
    className,
  };

  const inputProps = {
    id: autoId,
    colorScheme,
    checked,
    ...props,
  };

  const sliderProps = { colorScheme };

  if (!captionUnchecked && !captionChecked) {
    return (
      <Label {...labelProps}>
        <Input {...inputProps} />
        <Slider {...sliderProps} />
      </Label>
    );
  }

  return (
    <Inline space="small" css={{ overflow: 'visible' }}>
      {captionUnchecked && <Caption>{captionUnchecked}</Caption>}
      <Label {...labelProps}>
        <Input {...inputProps} />
        <Slider {...sliderProps} />
      </Label>
      {captionChecked && <Caption>{captionChecked}</Caption>}
    </Inline>
  );
};
