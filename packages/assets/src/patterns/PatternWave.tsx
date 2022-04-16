import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="100%" viewBox="0 0 215 75" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><rect x={105.003} y={70.0003} width={5.00003} height={50.0002} rx={2.50001} transform="rotate(-180 105.003 70.0003)" fill="currentColor" /><rect opacity={0.6} x={95.0012} y={65.0003} width={5.00003} height={55.0002} rx={2.50001} transform="rotate(-180 95.0012 65.0003)" fill="currentColor" /><rect opacity={0.4} width={5.00001} height={40.0001} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 85.0032 14.9999)" fill="currentColor" /><rect opacity={0.2} width={5.00001} height={60.0003} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 75.0017 9.99994)" fill="currentColor" /><rect opacity={0.4} width={5.00001} height={45.0002} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 64.9992 24.9998)" fill="currentColor" /><rect opacity={0.2} width={5.00001} height={50.0002} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 55.001 9.99994)" fill="currentColor" /><rect opacity={0.6} width={5.00001} height={55.0002} rx={2.5} transform="matrix(-1 -4.89277e-08 -1.78445e-07 1 44.9993 14.9999)" fill="currentColor" /><rect opacity={0.3} width={5.00001} height={65.0002} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 35.0012 9.99994)" fill="currentColor" /><rect opacity={0.2} width={5.00001} height={55.0002} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 24.9996 9.99994)" fill="currentColor" /><rect opacity={0.4} width={5.00001} height={55.0002} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 15.0015 9.99994)" fill="currentColor" /><rect opacity={0.6} width={5.00001} height={45.0002} rx={2.5} transform="matrix(-1 -4.89277e-08 -1.78445e-07 1 5 19.9998)" fill="currentColor" /><rect x={215} y={70.0003} width={5.00003} height={50.0002} rx={2.50001} transform="rotate(-180 215 70.0003)" fill="currentColor" /><rect opacity={0.6} x={205.002} y={62.3786} width={5.00002} height={57.3789} rx={2.50001} transform="rotate(-180 205.002 62.3786)" fill="currentColor" /><rect opacity={0.4} width={5.00001} height={45.0002} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 195 9.99994)" fill="currentColor" /><rect opacity={0.2} width={5.00001} height={60.0003} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 185.002 9.99994)" fill="currentColor" /><rect opacity={0.4} width={5.00001} height={60.0003} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 175.001 9.99994)" fill="currentColor" /><rect opacity={0.2} width={5.00001} height={60.0003} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 165.002 9.99994)" fill="currentColor" /><rect opacity={0.6} width={5.00001} height={70.0003} rx={2.5} transform="matrix(-1 -2.58096e-08 -1.5885e-07 1 155.001 0)" fill="currentColor" /><rect opacity={0.3} width={5.00001} height={55.0002} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 145.002 14.9999)" fill="currentColor" /><rect opacity={0.2} width={5.00001} height={55.0002} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 135.001 9.99994)" fill="currentColor" /><rect opacity={0.4} width={5.00001} height={55.0002} rx={2.50001} transform="matrix(-1 -8.14215e-08 -1.07231e-07 1 125.003 9.99994)" fill="currentColor" /><rect opacity={0.6} width={5.00001} height={50.0002} rx={2.5} transform="matrix(-1 -4.89277e-08 -1.78445e-07 1 115.001 14.9999)" fill="currentColor" /></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const PatternWave = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  theme
}) => ({ ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize
}));
PatternWave.defaultProps = {
    color: "piccolo.100",
  };
export default PatternWave;