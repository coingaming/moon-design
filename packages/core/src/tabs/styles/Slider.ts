import {rem} from "@heathmont/moon-utils";
import styled from "styled-components";

export const Slider = styled.div<{
  isTop?: boolean;
  isVertical?: boolean;
  isSegmented?: boolean;
  fillTab?: boolean;
  size: string | number;
  offset: string | number;
}>(
  ({ theme, isTop, isVertical, isSegmented, offset, size, fillTab }) => ({
    position: 'absolute',
    width: isVertical ? fillTab ? '100%' : rem(2) : size,
    height: isVertical ? size : fillTab ? `calc(100% - ${ isSegmented ? rem(8) : '0px' })` : rem(2),
    top: isVertical ? offset : isTop ? 0 : isSegmented ? rem(4) : 'initial',
    bottom: isTop ? 'initial' : 0,
    left: isVertical ? isTop ? 'initial' : 0 : offset,
    right: isVertical && isTop ? 0 : 'initial',
    backgroundColor: isSegmented ? theme.colorNew.goten : theme.colorNew.piccolo,
    borderRadius: fillTab ? rem(8) : 'none',
    transition: `all ${theme.newTokens.transition.default}`,
    margin: 0,
    zIndex: 1,
  })
);
