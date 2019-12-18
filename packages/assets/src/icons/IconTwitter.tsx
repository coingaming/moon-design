import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/sportsbet-themes';
import { themed } from '@heathmont/sportsbet-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.965 4.506c0-.175 0-.349-.012-.522A8.279 8.279 0 0 0 20 1.892a8.29 8.29 0 0 1-2.357.636A4.066 4.066 0 0 0 19.447.293a8.301 8.301 0 0 1-2.605.98 4.154 4.154 0 0 0-4.93-.794 4.023 4.023 0 0 0-2.063 4.48A11.711 11.711 0 0 1 1.392.737a4.007 4.007 0 0 0 1.27 5.394A4.12 4.12 0 0 1 .8 5.626v.05c0 1.924 1.377 3.58 3.292 3.962a4.158 4.158 0 0 1-1.853.07c.538 1.645 2.078 2.773 3.834 2.805A8.316 8.316 0 0 1 0 14.188 11.75 11.75 0 0 0 6.29 16c7.547.003 11.675-6.154 11.675-11.494z"
      fill="#1DA1F2"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconTwitter = styled(Svg)<IconProps>(
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
export default IconTwitter;
