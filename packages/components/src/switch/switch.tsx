import * as React from 'react';
import styled from 'styled-components';
import { rem, uniqueId } from '@heathmont/sportsbet-utils';
import { hideVisually } from 'polished';

const switchWidthProperty = '--switch-width';
const switchWidth = `var(${switchWidthProperty})`;

const switchHeightProperty = '--switch-height';
const switchHeight = `var(${switchHeightProperty})`;

const Slider = styled.span(
  ({ theme: { color, space, transitionDuration } }) => ({
    position: 'absolute',
    width: switchWidth,
    height: switchHeight,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    cursor: 'pointer',
    backgroundColor: color.goku[80],
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
      backgroundColor: color.trunks[100],
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

const Input = styled.input(({ theme: { color } }) => ({
  ...hideVisually(),
  [`&:checked + ${Slider}`]: {
    backgroundColor: color.piccolo[100],
    '&::before': {
      backgroundColor: color.goten[100],
      transform: `translateX(calc(${switchWidth} / 2))`,
    },
  },
}));

type ChangeHandler = (value: boolean) => void;
const handleChange = (onChange: ChangeHandler) => (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  if (typeof onChange === 'function') {
    onChange(event.target.checked);
  }
};

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type SwitchProps = {
  id?: HTMLInputProps['id'];
  // As this is a React component, we need to pass the `className` prop to allow
  // component styling with Styled Components.
  // https://www.styled-components.com/docs/advanced#existing-css
  className?: string;
  checked?: HTMLInputProps['checked'];
  onChange?: ChangeHandler;
};

export const Switch: React.FC<SwitchProps> = ({
  checked,
  id,
  className,
  onChange,
  ...props
}) => {
  const autoId = id || `Switch-${uniqueId()}`;

  return (
    <Label className={className} htmlFor={autoId} {...props}>
      <Input
        id={autoId}
        as="input"
        type="checkbox"
        checked={checked}
        onChange={onChange && handleChange(onChange)}
      />
      <Slider />
    </Label>
  );
};
