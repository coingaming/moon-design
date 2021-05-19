import React from 'react';
import styled from 'styled-components';
import { rem, uniqueId, inlineSvg } from '@heathmont/moon-utils';
import hideVisually from 'polished/lib/mixins/hideVisually';

import IconMoon from '../private/icons/IconMoon';
import IconSun from '../private/icons/IconSun';
import Inline from '../inline/Inline';
import Caption from '../caption/Caption';

const switchWidthProperty = '--switch-width';
const switchWidth = `var(${switchWidthProperty})`;

const switchHeightProperty = '--switch-height';
const switchHeight = `var(${switchHeightProperty})`;

type SliderColorScheme = {
  colorScheme?: boolean;
};

const Slider = styled.span<SliderColorScheme>(
  ({
    colorScheme,
    theme: {
      color, colorScheme: themeColorScheme, space, transitionDuration,
    },
  }) => ({
    position: 'absolute',
    width: switchWidth,
    height: switchHeight,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    cursor: 'pointer',
    backgroundColor: color.gohan[100],
    backgroundImage: colorScheme
      ? `${inlineSvg(<IconMoon />)}, ${inlineSvg(<IconSun />)}`
      : undefined,
    backgroundPosition: `left ${rem(space.small)} center, right ${rem(
      space.small,
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
      borderRadius: '50%',
      transition: 'inherit',
      transitionProperty: 'background-color, transform',
      willChange: 'transform',
    },
  }),
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
  }),
);

Input.defaultProps = {
  type: 'checkbox',
};

const SwitchCaption = styled(Caption as any)<{ checked: boolean }>(
  ({ checked, theme: { color, transitionDuration } }) => [
    { transition: `color ${transitionDuration.default}s` },
    checked && {
      color: checked ? color.trunks[100] : color.bulma[100],
    },
  ],
);

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type SwitchProps = {
  checked?: boolean;
  className?: string;
  captionUnchecked?: string;
  captionChecked?: string;
  id?: HTMLInputProps['id'];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & SliderColorScheme;

const Switch: React.FC<SwitchProps> = ({
  className,
  captionChecked,
  captionUnchecked,
  checked = false,
  colorScheme,
  id,
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
      {captionUnchecked && (
        <SwitchCaption checked={checked}>{captionUnchecked}</SwitchCaption>
      )}
      <Label {...labelProps}>
        <Input {...inputProps} />
        <Slider {...sliderProps} />
      </Label>
      {captionChecked && (
        <SwitchCaption checked={!checked}>{captionChecked}</SwitchCaption>
      )}
    </Inline>
  );
};

export default Switch;
