import React from 'react';
import { rem, uniqueId, inlineSvg } from '@heathmont/moon-utils';
import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';
import Caption from '../caption/Caption';
import Inline from '../inline/Inline';
import IconMoon from '../private/icons/IconMoon';
import IconSun from '../private/icons/IconSun';

const switchWidthProperty = '--switch-width';
const switchWidth = `var(${switchWidthProperty})`;

const switchHeightProperty = '--switch-height';
const switchHeight = `var(${switchHeightProperty})`;

type SliderColorScheme = {
  colorScheme?: boolean;
};

type Size = 'xs' | 'md' | 'lg';

const Slider = styled.span<SliderColorScheme>(
  ({
    colorScheme,
    theme: {
      color,
      colorNew,
      colorScheme: themeColorScheme,
      space,
      transitionDuration,
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
      backgroundColor: themeColorScheme ? color.goku[100] : colorNew.trunks,
      borderRadius: '50%',
      transition: 'inherit',
      transitionProperty: 'background-color, transform',
      willChange: 'transform',
    },
  })
);

const getLabelWidth = (size: Size) => {
  if (size === 'xs') {
    return rem(28);
  }
  if (size === 'md') {
    return rem(40);
  }
  if (size === 'lg') {
    return rem(56);
  }
};

const getLabelHeight = (size: Size) => {
  if (size === 'xs') {
    return rem(16);
  }
  if (size === 'md') {
    return rem(24);
  }
  if (size === 'lg') {
    return rem(32);
  }
};

const Label = styled.label<{ size: Size }>(({ theme: { space }, size }) => ({
  [switchWidthProperty]: size ? getLabelWidth(size) : rem(space.large * 2),
  [switchHeightProperty]: size ? getLabelHeight(size) : rem(space.large),

  position: 'relative',
  display: 'inline-block',
  width: switchWidth,
  height: switchHeight,
  flexShrink: 0,
})) as React.FC<{}>;

const Input = styled.input<SliderColorScheme>(
  ({ colorScheme, theme: { color, colorNew }, size }) => ({
    ...hideVisually(),
    [`&:checked + ${Slider}`]: {
      backgroundColor: colorScheme ? undefined : color.piccolo[100],
      '&::before': {
        // left: rem(-2),
        backgroundColor: colorScheme ? undefined : colorNew.goten,
        transform: `translateX(calc(${switchWidth} / ${size ? 2.5 : 2}))`,
      },
    },
  })
) as React.FC<{}>;

Input.defaultProps = {
  type: 'checkbox',
};

const SwitchCaption = styled(Caption as any)<{ checked: boolean }>(
  ({ checked, theme: { color, colorNew, transitionDuration } }) => [
    { transition: `color ${transitionDuration.default}s` },
    checked && {
      color: checked ? colorNew.trunks : color.bulma[100],
    },
  ]
);

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type SwitchProps = {
  checked?: boolean;
  className?: string;
  captionUnchecked?: string;
  captionChecked?: string;
  id?: HTMLInputProps['id'];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: Size;
} & SliderColorScheme;

const Switch: React.FC<SwitchProps> = ({
  className,
  captionChecked,
  captionUnchecked,
  checked = false,
  colorScheme,
  id,
  size,
  ...props
}) => {
  const autoId = id || `Switch-${uniqueId()}`;

  const labelProps = {
    className,
    size,
  };

  const inputProps = {
    id: autoId,
    colorScheme,
    checked,
    size,
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
    <Inline space="small" style={{ overflow: 'visible' }}>
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
