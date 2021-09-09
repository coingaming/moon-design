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
      d="M15.97 25.5V25v.5zm9.53-9.548h.5-.5zm0 9.548v.5a.5.5 0 00.47-.672l-.47.172zm-1.583-4.321L23.5 20.9a.5.5 0 00-.054.45l.47-.172zm-6.306-2.012a.5.5 0 001 0h-1zm1-6.334a.5.5 0 10-1 0h1zm-5.222 6.334a.5.5 0 101 0h-1zm1-3.167a.5.5 0 00-1 0h1zM26 15.952C26 10.453 21.52 6 16 6v1c4.973 0 9 4.01 9 8.952h1zM16 6c-5.52 0-10 4.453-10 9.952h1C7 11.01 11.027 7 16 7V6zM6 15.952C6 21.442 10.44 26 15.97 26v-1C11.005 25 7 20.902 7 15.952H6zm18.332 5.504A9.874 9.874 0 0026 15.952h-1c0 1.83-.552 3.531-1.5 4.949l.832.555zm1.637 3.872l-1.583-4.321-.939.344 1.584 4.321.939-.344zm-10 .672H25.5v-1h-9.53v1zm2.642-6.833v-6.334h-1v6.334h1zm-4.222 0V16h-1v3.167h1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const ChatStatsChat = styled(Svg)<IconProps>(
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
export default ChatStatsChat;
