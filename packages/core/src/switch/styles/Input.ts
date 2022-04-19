import React from "react";
import {rem} from "@heathmont/moon-utils";
import hideVisually from "polished/lib/mixins/hideVisually";
import styled from "styled-components";
import {Size} from "../types/Size";

const Input = styled.input<{
  switchWidth: string;
  colorScheme?: boolean;
  isRtl?: boolean;
  checked?: boolean;
  disabled?: boolean;
  size?: Size;
  button?: boolean;
}>(
  ({ colorScheme, isRtl, theme: { color, space }, size, button, switchWidth }) => ({
    ...hideVisually(),
    '&:checked + span': {
      backgroundColor: colorScheme ? undefined : color.piccolo[100],
      '&::before': {
        backgroundColor: colorScheme ? undefined : color.goten[100],
        left: rem(space.xsmall),
        right: 'initial',
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
