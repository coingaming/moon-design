import { ColorProps, Theme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const setColor = (theme: Theme, color?: ColorProps) =>
  color ? themed('color', color)(theme) : theme.colorNew.hit;

export default setColor;
