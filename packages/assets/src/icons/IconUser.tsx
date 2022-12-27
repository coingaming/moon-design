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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.45 8.5c0-3.931 3.42-7.05 7.55-7.05s7.55 3.119 7.55 7.05c0 3.931-3.42 7.05-7.55 7.05S8.45 12.431 8.45 8.5zM16 2.55c-3.601 0-6.45 2.702-6.45 5.95s2.849 5.95 6.45 5.95 6.45-2.702 6.45-5.95S19.601 2.55 16 2.55zM20.77 17.45h2.793c2.574 0 4.85 2.07 5.411 5.024l.001.006.522 2.927c.212 1.122-.22 2.108-1.155 2.6l-.012.006-.013.006c-10.477 4.858-20.925 1.493-24.453.008l-.022-.01-.02-.01c-.85-.448-1.557-1.389-1.33-2.597l.523-3.12.003-.014c.567-2.585 2.67-4.643 5.409-4.643H11.269c.46 0 .919 0 1.376.226.968.336 1.942.506 3.263.506 1.282 0 2.418-.333 3.438-.69.254-.123.534-.175.767-.2.246-.025.487-.025.658-.025zm-.542 1.12a1.2 1.2 0 00-.41.1l-.037.019-.038.013c-1.06.371-2.348.763-3.835.763-1.448 0-2.554-.191-3.662-.58l-.038-.013-.036-.02c-.206-.108-.41-.119-.962-.119H8.428c-2.128 0-3.85 1.597-4.331 3.766l-.522 3.11c-.116.611.212 1.127.74 1.414 3.452 1.448 13.502 4.646 23.527.004.45-.242.708-.717.574-1.418v-.006l-.522-2.927c-.483-2.535-2.382-4.126-4.33-4.126h-2.784c-.177 0-.367 0-.551.02z"
      fill="currentColor"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconUser =
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
export default IconUser;
