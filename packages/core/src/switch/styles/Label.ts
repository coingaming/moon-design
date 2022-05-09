import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import SliderProps from '../private/types/SliderProps';
import setLabelHeight from '../private/utils/setLabelHeight';
import setLabelWidth from '../private/utils/setLabelWidth';

const Label = styled.label<SliderProps>(
  ({
    theme: { newTokens },
    size,
    disabled,
    button,
    switchHeight,
    switchWidth,
    switchHeightProperty,
    switchWidthProperty,
  }) => ({
    [switchWidthProperty as string]: size
      ? setLabelWidth(size, button)
      : rem(64),
    [switchHeightProperty as string]: size
      ? setLabelHeight(size, button)
      : rem(32),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? newTokens.opacity : 1,
    position: 'relative',
    display: 'inline-block',
    width: switchWidth,
    height: switchHeight,
    flexShrink: 0,
  })
);

export default Label;
