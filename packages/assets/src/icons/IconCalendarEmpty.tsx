import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0a1 1 0 011 1v1h10V1a1 1 0 112 0v1h2a5 5 0 015 5v16a5 5 0 01-5 5H5a5 5 0 01-5-5V7a5 5 0 015-5h2V1a1 1 0 011-1zM7 4H5a3 3 0 00-3 3v2h24V7a3 3 0 00-3-3h-2v1a1 1 0 11-2 0V4H9v1a1 1 0 01-2 0V4zm19 7H2v12a3 3 0 003 3h18a3 3 0 003-3V11z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCalendarEmpty = styled(Svg)<IconProps>(
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
export default IconCalendarEmpty;
