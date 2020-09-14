import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.402 13.666a5 5 0 01-.056 7.014l-5.778 5.779a5 5 0 01-6.972.096L1.549 14.211a2 2 0 01-.626-1.453V3.19a3 3 0 013-3H13.5a2 2 0 011.436.608l12.466 12.869zm-1.47 5.6a3 3 0 00.034-4.209L13.5 2.19H3.923a1 1 0 00-1 1v9.57L15.97 25.102a3 3 0 004.184-.058l5.778-5.778zM9.923 7.689a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-1.5-3.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconTag = styled(Svg)<IconProps>(
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
export default IconTag;
