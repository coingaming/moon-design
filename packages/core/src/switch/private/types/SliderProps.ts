import { Theme } from '@heathmont/moon-themes';
import type Props from './Props';

type SliderProps = Props & {
  button?: boolean;
  switchHeight?: string;
  switchWidth?: string;
  switchHeightProperty?: string;
  switchWidthProperty?: string;
  theme?: Theme;
};

export default SliderProps;
