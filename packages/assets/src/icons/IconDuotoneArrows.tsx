import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.783 3.947H9.37a.958.958 0 010-1.917h4.666c.13 0 .253.027.363.072l.006.002a.959.959 0 01.59.886v4.665a.958.958 0 11-1.917 0V5.368L1.649 17.498l-.013.014a.957.957 0 01-1.363-1.347l11.51-12.218z"
      fill="#fff"
      fillOpacity={0.1}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.445.334A.334.334 0 0016.113 0h-4.666a.334.334 0 000 .667h3.862l-9.431 9.43a.333.333 0 10.471.472l9.431-9.431V5a.333.333 0 10.666 0V.334zm-4.097 9.568a.333.333 0 10-.471-.471l-9.431 9.431V15a.333.333 0 00-.667 0v4.667a.01.01 0 000 .002l.001.003a.334.334 0 00.332.328H6.78a.333.333 0 000-.667H2.917l9.431-9.43z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconDuotoneArrows = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
    {
      verticalAlign: 'middle',
    },
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
export default IconDuotoneArrows;
