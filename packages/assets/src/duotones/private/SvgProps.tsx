import { ColorProps } from '@heathmont/moon-themes';

export type SvgProps = React.SVGProps<SVGSVGElement> & {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
  secondaryColor: string;
};

export default SvgProps;
