import {rem} from "@heathmont/moon-utils";
import styled from "styled-components";

export const Slider = styled.div<{
  isTop?: boolean;
  isVertical?: boolean;
  isSegmented?: boolean;
  fillTab?: boolean;
  size: string | number;
  left: string | number;
}>(
  ({ theme, isTop, isVertical, isSegmented, left, size, fillTab }) => ({
    position: 'absolute',
    width: isVertical ? rem(2) : size,
    height: fillTab ? `calc(100% - ${ isSegmented ? rem(8) : '0px' })` : isVertical ? size : rem(2),
    top: isTop ? 0 : isSegmented ? rem(4) : 'initial',
    bottom: isTop ? 'initial' : 0,
    left: left,
    backgroundColor: isSegmented ? theme.colorNew.goten : theme.colorNew.piccolo,
    borderRadius: fillTab ? rem(8) : 'none',
    transition: `all ${theme.newTokens.transition.default}`,
    margin: 0,
    zIndex: 1,
  })
);
