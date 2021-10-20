import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.073 15.049l.351.356-.351-.356zm-5.496-2.024a.5.5 0 001 0h-1zm2.923 5.167a.5.5 0 001 0h-1zm1 2.923a.5.5 0 10-1 0h1zm-1 .366a.5.5 0 101 0h-1zm2.923-8.456c0 .65-.266 1.238-.702 1.668l.703.712c.616-.608 1-1.45 1-2.38h-1zm-4.846 0c0-1.301 1.076-2.371 2.423-2.371v-1c-1.882 0-3.423 1.5-3.423 3.37h1zM16 10.654c1.347 0 2.423 1.07 2.423 2.37h1c0-1.87-1.541-3.37-3.423-3.37v1zm1.721 4.04c-.428.422-.985.928-1.416 1.476-.437.556-.805 1.228-.805 2.022h1c0-.473.217-.928.591-1.404.38-.483.86-.915 1.333-1.383l-.703-.712zm-2.221 6.42v.366h1v-.366h-1zM25 16a9 9 0 01-9 9v1c5.523 0 10-4.477 10-10h-1zm-9 9a9 9 0 01-9-9H6c0 5.523 4.477 10 10 10v-1zm-9-9a9 9 0 019-9V6C10.477 6 6 10.477 6 16h1zm9-9a9 9 0 019 9h1c0-5.523-4.477-10-10-10v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const NotificationsQuestionMark =
  styled(Svg) <
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
export default NotificationsQuestionMark;
