import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.5 10.385a.5.5 0 000 1v-1zm5.115 1a.5.5 0 100-1v1zm8.77-1a.5.5 0 000 1v-1zm5.115 1a.5.5 0 100-1v1zm-19 0h5.115v-1H6.5v1zm13.885 0H25.5v-1h-5.115v1zM8.5 7h1.115V6H8.5v1zM7 16V8.5H6V16h1zm9 9a9 9 0 01-9-9H6c0 5.523 4.477 10 10 10v-1zm9-9a9 9 0 01-9 9v1c5.523 0 10-4.477 10-10h-1zm0-7.5V16h1V8.5h-1zM22.385 7H23.5V6h-1.115v1zm-2.5 1.5V16h1V8.5h-1zm0 7.5A3.885 3.885 0 0116 19.885v1A4.885 4.885 0 0020.885 16h-1zM16 19.885A3.885 3.885 0 0112.115 16h-1A4.885 4.885 0 0016 20.885v-1zM12.115 16V8.5h-1V16h1zm10.27-10a2.5 2.5 0 00-2.5 2.5h1a1.5 1.5 0 011.5-1.5V6zM9.615 7a1.5 1.5 0 011.5 1.5h1a2.5 2.5 0 00-2.5-2.5v1zM26 8.5A2.5 2.5 0 0023.5 6v1A1.5 1.5 0 0125 8.5h1zM8.5 6A2.5 2.5 0 006 8.5h1A1.5 1.5 0 018.5 7V6z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const SecurityMagnet = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]
);
export default SecurityMagnet;
