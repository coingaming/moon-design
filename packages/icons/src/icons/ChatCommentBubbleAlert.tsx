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
      d="M15.97 25.5V25v.5zm9.53-9.548h.5-.5zm-.03 9.482l.004.5a.5.5 0 00.465-.671l-.47.171zm-1.553-4.255L23.5 20.9a.5.5 0 00-.054.449l.47-.171zM16.5 11.615a.5.5 0 10-1 0h1zm-1 6.09a.5.5 0 001 0h-1zm0 2.574a.5.5 0 001 0h-1zm1-.433a.5.5 0 00-1 0h1zm9.5-3.894C26 10.453 21.52 6 16 6v1c4.973 0 9 4.01 9 8.952h1zM16 6c-5.52 0-10 4.453-10 9.952h1C7 11.01 11.027 7 16 7V6zM6 15.952C6 21.442 10.44 26 15.97 26v-1C11.005 25 7 20.902 7 15.952H6zm18.332 5.504A9.874 9.874 0 0026 15.952h-1c0 1.83-.552 3.531-1.5 4.949l.832.555zm1.607 3.807l-1.553-4.256-.939.343L25 25.606l.94-.343zM15.97 26c3.177 0 6.323-.035 9.505-.066l-.01-1c-3.184.031-6.324.066-9.494.066v1zM15.5 11.615v6.09h1v-6.09h-1zm1 8.664v-.433h-1v.433h1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ChatCommentBubbleAlert =
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
export default ChatCommentBubbleAlert;
