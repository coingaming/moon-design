import React from "react";
import {rem} from "@heathmont/moon-utils";
import styled from "styled-components";
import {Size} from "../types/Size";

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

const Label = styled.label<{
  size: Size,
  switchHeightProperty: string,
  switchWidthProperty: string,
  switchHeight: string,
  switchWidth: string,
  disabled?: boolean,
  button?: boolean
}>(
  ({ theme: { space, opacity }, size, disabled, button, switchHeight, switchWidth, switchHeightProperty, switchWidthProperty }) => ({
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

export default Label;
