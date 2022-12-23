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
      d="M25.5 15.952h.5-.5zm-.03 9.482l.004.5a.5.5 0 00.465-.671l-.47.171zm-1.553-4.255L23.5 20.9a.5.5 0 00-.054.449l.47-.171zm-7.417-.957a.5.5 0 00-1 0h1zm-1 .678a.5.5 0 001 0h-1zm-3.167-7.011a.5.5 0 001 0h-1zM16 17.847l-.374-.331a.5.5 0 00-.126.331h.5zm-.5.264a.5.5 0 101 0h-1zM26 15.952C26 10.453 21.52 6 16 6v1c4.973 0 9 4.01 9 8.952h1zM16 6c-5.52 0-10 4.453-10 9.952h1C7 11.01 11.027 7 16 7V6zM6 15.952C6 21.442 10.44 26 15.97 26v-1C11.005 25 7 20.902 7 15.952H6zm18.332 5.504A9.874 9.874 0 0026 15.952h-1c0 1.83-.552 3.531-1.5 4.949l.832.555zm1.607 3.807l-1.553-4.256-.939.343L25 25.606l.94-.343zM15.97 26c3.177 0 6.323-.035 9.505-.066l-.01-1c-3.184.031-6.324.066-9.494.066v1zm-.469-5.778v.678h1v-.678h-1zm-2.167-6.333A2.667 2.667 0 0116 11.222v-1a3.667 3.667 0 00-3.667 3.667h1zM16 11.222a2.667 2.667 0 012.667 2.667h1A3.667 3.667 0 0016 10.222v1zm-.5 6.625v.264h1v-.264h-1zm3.167-3.958c0 .612-.4 1.192-1.055 1.82-.32.308-.669.598-1.02.898-.342.292-.69.597-.966.909l.748.663c.224-.253.522-.517.867-.812.337-.287.717-.603 1.064-.936.678-.652 1.362-1.487 1.362-2.542h-1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ChatCommentBubbleQuestionMark =
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
export default ChatCommentBubbleQuestionMark;
