import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.021 17.86c-.17.175-.463.263-.663.3l-1.938-1.993-.002-.004h-.002l-2.212-2.276.974-.988 4.145 4.265c-.04.212-.13.52-.302.696zm-6.272-2.499l.889-.9.88.906a7.12 7.12 0 00-1.769-.006zm-6.194-1.563c-2.348-2.417-2.348-6.349 0-8.765a5.9 5.9 0 018.517 0 6.258 6.258 0 011.727 5.075l-5.4 5.477a5.908 5.908 0 01-4.844-1.787zm10.044-.594l-.855-.879.84-.851a7.777 7.777 0 00.015 1.73zm1.292 1.329c-.874-1.225-.5-3.397-.334-4.152.002-.01.013-.018.014-.027l.004-.054.001-.005c.002-.007 0-.012.002-.019.257-2.162-.445-4.28-1.943-5.821a6.69 6.69 0 00-9.642 0c-2.657 2.735-2.657 7.186 0 9.922 1.292 1.327 3.01 2.053 4.811 2.053.272 0 .546-.015.82-.049.006 0 .008-.005.012-.006.012-.001.023.002.033-.001.69-.17 3.024-.63 4.223.406l2.041 2.101a.394.394 0 00.281.119l.023-.001c.086-.004.86-.063 1.345-.561.48-.495.552-1.298.558-1.388a.423.423 0 00-.115-.32l-2.134-2.197zm2.123-10.264c-.656 0-1.191-.55-1.191-1.226 0-.675.535-1.226 1.191-1.226.658 0 1.192.55 1.192 1.226 0 .676-.534 1.226-1.192 1.226zm0-3.269c-1.095 0-1.985.917-1.985 2.043 0 1.127.89 2.044 1.985 2.044C18.11 5.087 19 4.17 19 3.043 19 1.917 18.11 1 17.014 1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsTableTennis =
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
export default IconSportsTableTennis;
