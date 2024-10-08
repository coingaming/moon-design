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
      d="M15.996 21.962c-.394 0-.849.195-1.273.427-.448.245-.95.582-1.467.963-1.033.761-2.16 1.724-3.075 2.54-.343.306-.754.383-1.087.297-.324-.084-.6-.328-.694-.747-.43-1.903-.9-5.002-.9-9.442 0-4.364.512-7.274.953-8.971.281-1.084 1.173-1.855 2.313-2.057a30.461 30.461 0 015.23-.472c2.033 0 3.864.233 5.177.463 1.168.205 2.09 1.002 2.387 2.118.472 1.765 1.012 4.734.932 8.91-.089 4.622-.845 7.784-1.48 9.651-.132.385-.413.587-.728.636-.325.051-.714-.059-1.023-.376-.796-.816-1.781-1.779-2.703-2.54-.46-.38-.915-.72-1.33-.966-.396-.235-.832-.434-1.232-.434z"
      stroke="currentColor"
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
const GenericBookmarkAlternative =
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
export default GenericBookmarkAlternative;
