import React from 'react';
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
      d="M8.168 19.832C3.52 18.973 0 14.898 0 10 0 4.477 4.477 0 10 0c4.897 0 8.972 3.52 9.832 8.168C24.48 9.028 28 13.103 28 18c0 5.523-4.477 10-10 10-4.897 0-8.972-3.52-9.832-8.168zM2 10a8 8 0 0115.749-1.997c-5.323.131-9.615 4.422-9.746 9.746A8.003 8.003 0 012 10zm17.997.251a8 8 0 11-9.746 9.746c5.324-.131 9.615-4.422 9.746-9.746zM10 18a8 8 0 008-8 8 8 0 00-8 8z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconChartPies = styled(Svg)<IconProps>(
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
export default IconChartPies;
