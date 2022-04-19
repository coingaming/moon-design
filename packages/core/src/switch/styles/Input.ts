import React from "react";
import hideVisually from "polished/lib/mixins/hideVisually";
import styled from "styled-components";
import {Size} from "../types/Size";
import Slider from "./Slider";

const Input = styled.input<{
  switchWidth: string;
  colorScheme?: boolean;
  isRtl?: boolean;
  checked?: boolean;
  disabled?: boolean;
  size?: Size;
  button?: boolean;
}>(
  ({ colorScheme, isRtl, theme: { color }, size, button, switchWidth }) => ({
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

export default Input;
