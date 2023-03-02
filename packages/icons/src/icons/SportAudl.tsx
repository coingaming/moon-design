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
      d="M11.182 18.6c3.16 2.79 6.857 4.643 9.891 4.958m-5.495-9.944l-.76 1.326a.281.281 0 00.175.412l2.274.615 1.899 2.22a.284.284 0 00.317.084.284.284 0 00.189-.265l.014-1.754 1.773-.047a.288.288 0 00.264-.192.281.281 0 00-.09-.311l-2.284-1.835-.665-2.237a.288.288 0 00-.42-.165l-1.326.776-2.333-1.3a.29.29 0 00-.346.05.281.281 0 00-.042.342l1.36 2.28h.001zm10.862 3.748c-1.266-2.458-3.525-4.927-6.36-6.951a15.81 15.81 0 00-.249-.175l-.162-.118c-1.801-1.284-3.723-2.249-5.52-2.8-1.562-.531-3.073-.818-4.424-.818-2.036-.001-3.578.635-4.457 1.839-1.116 1.528-1.013 3.766.292 6.297 1.266 2.459 3.525 4.928 6.36 6.952 3.432 2.45 7.303 3.912 10.354 3.912 2.037 0 3.58-.637 4.459-1.84 1.116-1.529 1.01-3.766-.293-6.297zm-1.655-1.773c-.922-1.789-2.565-3.585-4.628-5.057l-.18-.127-.118-.086c-1.31-.935-2.708-1.636-4.015-2.037-1.136-.387-2.235-.595-3.218-.595-1.482 0-2.604.463-3.244 1.339-.812 1.112-.736 2.739.213 4.582.922 1.789 2.564 3.585 4.627 5.057 2.497 1.782 5.314 2.846 7.534 2.846 1.481 0 2.603-.462 3.243-1.338.812-1.112.737-2.74-.213-4.583l-.001-.001z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportAudl =
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
export default SportAudl;
