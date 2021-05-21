import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="auto" viewBox="0 0 42 41" xmlns="http://www.w3.org/2000/svg" {...props}><g fill="none" fillRule="evenodd" opacity={0.9}><path d="M15.547 0C22.444.026 28.017 5.634 28 12.531 27.983 19.43 22.382 25.01 15.484 25 8.587 24.991 3 19.398 3 12.5 3.013 5.584 8.63-.013 15.547 0z" fill="#06BEE1" /><circle fill="#1768AC" cx={22.5} cy={27.5} r={12.5} /><ellipse fill="#2541B2" cx={10} cy={31.5} rx={10} ry={9.5} /><path d="M35.024 19A7 7 0 1128 26a7.012 7.012 0 017.024-7z" fill="#03256C" /></g></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const LogoHub88Short = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  verticalAlign,
  theme
}) => ({ ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize,
  verticalAlign
}));
LogoHub88Short.defaultProps = {
    verticalAlign: "middle",
  };
export default LogoHub88Short;