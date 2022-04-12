import React from 'react';
import { IconMoon, IconSun } from '@heathmont/moon-assets';
import { Space } from '@heathmont/moon-themes';
import { rem, uniqueId, inlineSvg } from '@heathmont/moon-utils';
import rgba from "polished/lib/color/rgba";
import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';
import Inline from '../inline/Inline';

const switchWidthProperty = '--switch-width';
const switchWidth = `var(${switchWidthProperty})`;

const switchHeightProperty = '--switch-height';
const switchHeight = `var(${switchHeightProperty})`;

type SliderOptions = {
  colorScheme?: boolean;
  isRtl?: boolean;
  checked?: boolean;
  disabled?: boolean;
  size?: Size;
  button?: boolean;
};

type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg';

const Slider = styled.span<SliderOptions>(
  ({
    colorScheme,
    isRtl,
    checked,
    size,
    button,
    theme: { color, space, transitionDuration },
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
      // left: rem(space.xsmall),
      ...adjustBallSwitchIcon(space, isRtl, checked),
      bottom: size !== '2xs' ? rem(space.xsmall) :
        `calc(${rem(space.xsmall)} / 2)`,
      backgroundColor: color.goten[100],
      borderRadius: button ? rem(8) : '50%',
      transition: 'inherit',
      transitionProperty: 'background-color, transform',
      willChange: 'transform',
      boxShadow: `0px 6px 6px ${rgba(
        color.popo[100],
        0.16
      )}, 0px 0px 1px ${rgba(
        color.popo[100],
        0.4
      )}`
    },
  })
);

const adjustBallSwitchIcon = (
  space: Space,
  isRtl?: boolean,
  checked?: boolean
) => {
  if (!isRtl) {
    return { left: rem(space.xsmall) };
  }

  return checked
    ? { left: rem(space.xsmall) }
    : { left: `calc(${switchHeight} )` };
};

const getLabelWidth = (size: Size, button?: boolean) => {
  if (button) {
    if (size === 'md') {
      return rem(110);
    }

    return rem(126);
  }

  if (size === '2xs') {
    return rem(32);
  }
  if (size === 'xs') {
    return rem(44);
  }

  return rem(60);
};

const getLabelHeight = (size: Size, button?: boolean) => {
  if (button) {
    if (size === 'md') {
      return rem(40);
    }

    return rem(48);
  }

  if (size === '2xs') {
    return rem(16);
  }
  if (size === 'xs') {
    return rem(24);
  }

  return rem(32);
};

const Label = styled.label<{ size: Size, disabled?: boolean, button?: boolean }>(
  ({ theme: { space, opacity }, size, disabled, button }) => ({
    [switchWidthProperty]: size ? getLabelWidth(size, button) : rem(space.large * 2),
    [switchHeightProperty]: size ? getLabelHeight(size, button) : rem(space.large),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? opacity.disabled : 1,
    position: 'relative',
    display: 'inline-block',
    width: switchWidth,
    height: switchHeight,
    flexShrink: 0,
  })
) as React.FC<{}>;

const Input = styled.input<SliderOptions>(
  ({ colorScheme, isRtl, theme: { color }, size, button }) => ({
    ...hideVisually(),
    [`&:checked + ${Slider}`]: {
      backgroundColor: colorScheme ? undefined : color.piccolo[100],
      '&::before': {
        backgroundColor: colorScheme ? undefined : color.goten[100],
        transform: isRtl
          ? `translateX(calc(${switchWidth} / ${
            size === '2xs' ? 2.4 : size || button ? 2.15 : 2
          }) * -1)`
          : `translateX(calc(${switchWidth} / ${
            size === '2xs' ? 2.4 : size || button ? 2.15 : 2
          }))`,
      },
    },
  })
) as React.FC<{}>;

Input.defaultProps = {
  type: 'checkbox',
};

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type SwitchProps = {
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  id?: HTMLInputProps['id'];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: Size;
} & SliderOptions;

const Switch: React.FC<SwitchProps> = ({
  className,
  checked = false,
  disabled = false,
  colorScheme,
  id,
  isRtl,
  size = 'sm',
  button = false,
  ...props
}) => {
  const autoId = id || `Switch-${uniqueId()}`;

  const labelProps = {
    className,
    size,
    disabled,
    button
  };

  const inputProps = {
    id: autoId,
    colorScheme,
    checked,
    size,
    button,
    isRtl,
    ...props,
    onChange: props.onChange && !disabled ? props.onChange : () => {}
  };

  const sliderProps = { colorScheme, isRtl, checked, size, button };

  return (
    <Inline
      space="small"
      style={{ overflow: 'visible' }}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <Label {...labelProps}>
        <Input {...inputProps} />
        <Slider {...sliderProps} />
      </Label>
    </Inline>
  );
};

export default Switch;
