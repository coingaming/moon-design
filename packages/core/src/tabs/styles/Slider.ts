import {rem} from "@heathmont/moon-utils";
import styled from "styled-components";

export const Slider = styled.span<{
  isTop?: boolean;
  isVertical?: boolean;
  size: string | number;
  left: string | number;
}>(
  ({ theme, isTop, isVertical, left, size }) => ({
    position: 'absolute',
    width: isVertical ? rem(2) : size,
    height: isVertical ? size : rem(2),
    top: isTop ? 0 : 'initial',
    bottom: isTop ? 'initial' : 0,
    left: left,
    backgroundColor: theme.colorNew.piccolo,
    //borderRadius: `calc(${switchWidth} + ${rem(2)})`,
    transition: 'all .2s'
  })
);
