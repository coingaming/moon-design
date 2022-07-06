import React from 'react';
import { uniqueId } from '@heathmont/moon-utils';
import Inline from '../inline/Inline';
import Size from '../private/enums/Size';
import Text from '../text/Text';
import ButtonLabels from './styles/ButtonLabels';
import Input from './styles/Input';
import Label from './styles/Label';
import Slider from './styles/Slider';
import type SwitchProps from './private/types/SwitchProps';

const switchWidthProperty = '--switch-width';
const switchWidth = `var(${switchWidthProperty})`;

const switchHeightProperty = '--switch-height';
const switchHeight = `var(${switchHeightProperty})`;

const Switch: React.FC<SwitchProps> = ({
  className,
  checked,
  disabled,
  colorScheme,
  id,
  isRtl,
  size = Size.SMALL,
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
    button: !!buttons,
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
    onChange: props.onChange && !disabled ? props.onChange : () => {},
  };
  const sliderProps = {
    colorScheme,
    isRtl,
    checked,
    size,
    button: !!buttons,
    switchHeight,
    switchWidth,
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
          {!!buttons && (
            <ButtonLabels>
              <Text size={14}>{buttons.offLabel}</Text>
              <Text size={14}>{buttons.onLabel}</Text>
            </ButtonLabels>
          )}
        </Slider>
      </Label>
    </Inline>
  );
};

export default Switch;
