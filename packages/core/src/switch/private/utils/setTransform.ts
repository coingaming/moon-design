import Size from '../../../private/enums/Size';
import SliderProps from '../types/SliderProps';

const setTransform = ({ isRtl, size, switchWidth, button }: SliderProps) => {
  if (isRtl) {
    return `translateX(calc(${switchWidth} / ${
      size === Size.TWOXSMALL ? 2.4 : size || button ? 2.15 : 2
    }) * -1)`;
  }
  return `translateX(calc(${switchWidth} / ${
    size === Size.TWOXSMALL ? 2.4 : size || button ? 2.15 : 2
  }))`;
};

export default setTransform;
