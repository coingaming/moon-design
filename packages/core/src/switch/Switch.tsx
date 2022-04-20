import React from 'react';
import { uniqueId } from '@heathmont/moon-utils';
import {Text} from "../index";
import Inline from '../inline/Inline';
import {Size} from "./private/Size";
import ButtonLabels from "./styles/ButtonLabels";
import Input from "./styles/Input";
import Label from "./styles/Label";
import Slider from "./styles/Slider";

const switchWidthProperty = '--switch-width';
const switchWidth = `var(${switchWidthProperty})`;

const switchHeightProperty = '--switch-height';
const switchHeight = `var(${switchHeightProperty})`;

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type SwitchProps = {
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  colorScheme?: boolean;
  id?: HTMLInputProps['id'];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: Size;
  isRtl?: boolean;
  buttons?: {
    onLabel: string;
    offLabel: string;
  }
};

const Switch: React.FC<SwitchProps> = ({
  className,
  checked = false,
  disabled = false,
  colorScheme,
  id,
  isRtl,
  size = 'sm',
  buttons,
  ...props
}) => {
  const autoId = id || `Switch-${uniqueId()}`;

  const labelProps = {
    switchHeightProperty,
    switchWidthProperty,
    switchHeight,
    switchWidth,
    className,
    size,
    disabled,
    button: !!buttons
  };

  const inputProps = {
    switchWidth,
    id: autoId,
    colorScheme,
    checked,
    size,
    button: !!buttons,
    isRtl,
    ...props,
    onChange: props.onChange && !disabled ? props.onChange : () => {}
  };

  const sliderProps = {
    colorScheme,
    isRtl,
    checked,
    size,
    button: !!buttons,
    switchHeight,
    switchWidth
  };

  return (
    <Inline
      space="small"
      style={{ overflow: 'visible' }}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <Label {...labelProps}>
        <Input {...inputProps} />
        <Slider {...sliderProps}>
          {
            !!buttons && (<ButtonLabels>
              <Text>{buttons.offLabel}</Text>
              <Text>{buttons.onLabel}</Text>
            </ButtonLabels>)
          }
        </Slider>
      </Label>
    </Inline>
  );
};

export default Switch;
