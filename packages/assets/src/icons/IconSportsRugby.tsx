import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.203 29.075a42.97 42.97 0 0013.713 13.722M15.47 24.439c-2.539 3.99-3.188 7.892-1.3 9.755 1.903 1.876 5.842 1.149 9.83-1.495M29.049 5.212A42.968 42.968 0 0142.76 18.934M25.036 15.439c3.738-2.269 7.327-2.807 9.117-1.042 1.744 1.721 1.322 5.185-.756 8.85"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.719 43.01c3.295.673 10.098 1.276 18.106-2.695a32.242 32.242 0 0014.492-14.502c3.968-7.978 3.366-14.786 2.693-18.119a3.487 3.487 0 00-2.729-2.73c-3.33-.638-10.133-1.241-18.106 2.73A32.242 32.242 0 007.683 22.196C3.715 30.174 4.317 36.982 4.99 40.315a3.493 3.493 0 002.729 2.694zM18.916 29.068l9.597-9.415"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsRugby =
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
export default IconSportsRugby;
