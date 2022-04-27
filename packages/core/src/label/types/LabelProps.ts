import { ColorProps } from '@heathmont/moon-themes';
import Size from '../../private/enums/Size';

type LabelProps = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  size?: 'twoxsmall' | 'xsmall' | Size.TWOXSMALL | Size.XSMALL;
  isUppercase?: boolean;
};

export default LabelProps;
