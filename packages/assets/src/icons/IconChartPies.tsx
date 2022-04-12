import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.168 21.832C5.52 20.973 2 16.898 2 12 2 6.477 6.477 2 12 2c4.897 0 8.972 3.52 9.832 8.168C26.48 11.027 30 15.102 30 20c0 5.523-4.477 10-10 10-4.897 0-8.972-3.52-9.832-8.168zM4 12a8 8 0 0115.749-1.997c-5.323.131-9.615 4.422-9.746 9.746A8.003 8.003 0 014 12zm17.997.251a8 8 0 11-9.746 9.746c5.324-.131 9.615-4.422 9.746-9.746zM12 20a8 8 0 008-8 8 8 0 00-8 8z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconChartPies =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
  ]);
export default IconChartPies;
