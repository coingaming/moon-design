import { Theme } from '@heathmont/moon-themes';
import SwitchSize from './SwitchSize';

type SliderProps = {
  colorScheme?: boolean;
  checked?: boolean;
  disabled?: boolean;
  size?: SwitchSize;
  button?: boolean;
  isRtl?: boolean;
  switchHeight?: string;
  switchWidth?: string;
  switchHeightProperty?: string;
  switchWidthProperty?: string;
  theme?: Theme;
};

export default SliderProps;
