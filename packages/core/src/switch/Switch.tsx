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
};

type Size = '2xs' | 'xs' | 'sm';

const Slider = styled.span<SliderOptions>(
  ({
    colorScheme,
    isRtl,
    checked,
    size,
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
    borderRadius: `calc(${switchWidth} + ${rem(2)})`,
    transitionProperty: 'background-color',
    transitionDuration: `${transitionDuration.slow}s`,
    transitionTimingFunction: 'ease',
    '&::before': {
      '--switch-indicator-size': `calc(${switchHeight} - ${
        size === '2xs' ? rem(space.xsmall) : rem(space.small)
      })`,
      content: '""',
      position: 'absolute',
      width: 'var(--switch-indicator-size)',
      height: 'var(--switch-indicator-size)',
      // left: rem(space.xsmall),
      ...adjustBallSwitchIcon(space, isRtl, checked),
      bottom: size !== '2xs' ? rem(space.xsmall) :
        `calc(${rem(space.xsmall)} / 2)`,
      backgroundColor: color.goten[100],
      borderRadius: '50%',
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

const getLabelWidth = (size: Size) => {
  if (size === '2xs') {
    return rem(32);
  }
  if (size === 'xs') {
    return rem(44);
  }
  if (size === 'sm') {
    return rem(60);
  }
};

const getLabelHeight = (size: Size) => {
  if (size === '2xs') {
    return rem(16);
  }
  if (size === 'xs') {
    return rem(24);
  }
  if (size === 'sm') {
    return rem(32);
  }
};

const Label = styled.label<{ size: Size, disabled?: boolean }>(
  ({ theme: { space, opacity }, size, disabled }) => ({
    [switchWidthProperty]: size ? getLabelWidth(size) : rem(space.large * 2),
    [switchHeightProperty]: size ? getLabelHeight(size) : rem(space.large),
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
  ({ colorScheme, isRtl, theme: { color }, size }) => ({
    ...hideVisually(),
    [`&:checked + ${Slider}`]: {
      backgroundColor: colorScheme ? undefined : color.piccolo[100],
      '&::before': {
        backgroundColor: colorScheme ? undefined : color.goten[100],
        transform: isRtl
          ? `translateX(calc(${switchWidth} / ${
            size === '2xs' ? 2.4 : size ? 2.15 : 2
          }) * -1)`
          : `translateX(calc(${switchWidth} / ${
            size === '2xs' ? 2.4 : size ? 2.15 : 2
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
  ...props
}) => {
  const autoId = id || `Switch-${uniqueId()}`;

  const labelProps = {
    className,
    size,
    disabled
  };

  const inputProps = {
    id: autoId,
    colorScheme,
    checked,
    size,
    isRtl,
    ...props,
    onChange: props.onChange && !disabled ? props.onChange : () => {}
  };

  const sliderProps = { colorScheme, isRtl, checked, size };

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
