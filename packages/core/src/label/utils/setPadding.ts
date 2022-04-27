import { rem } from '@heathmont/moon-utils';
import Size from '../../private/enums/Size';
import LabelProps from '../types/LabelProps';

const setPadding = ({ size, iconRight, iconLeft }: LabelProps) =>
  size === Size.TWOXSMALL
    ? `0 ${rem(iconRight ? 4 : 8)} 0 ${rem(iconLeft ? 4 : 8)}`
    : `${rem(4)} ${rem(iconRight ? 4 : 8)} ${rem(4)} ${rem(iconLeft ? 4 : 8)}`;

export default setPadding;
