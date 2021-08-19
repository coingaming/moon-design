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
      d="M21.459 5.835a.5.5 0 10-.944.33l.944-.33zm-9.974.33a.5.5 0 00-.944-.33l.944.33zm9.03 18.67a.5.5 0 00.944.33l-.944-.33zm-9.974.33a.5.5 0 10.944-.33l-.944.33zM16.5 11.42a.5.5 0 00-1 0h1zm-.5 4.385h-.5a.5.5 0 00.228.419l.272-.42zm2.637 2.307a.5.5 0 10.544-.84l-.544.84zM23.5 15.5c0 4.166-3.36 7.538-7.5 7.538v1c4.697 0 8.5-3.825 8.5-8.538h-1zM16 23.038c-4.14 0-7.5-3.372-7.5-7.538h-1c0 4.713 3.803 8.538 8.5 8.538v-1zM8.5 15.5c0-4.166 3.36-7.538 7.5-7.538v-1c-4.697 0-8.5 3.825-8.5 8.538h1zM16 7.962c4.14 0 7.5 3.372 7.5 7.538h1c0-4.713-3.803-8.538-8.5-8.538v1zm4.515-1.797l1.922 5.481.944-.33-1.922-5.481-.944.33zM9.563 11.646l1.922-5.48-.944-.331-1.922 5.48.944.331zm11.896 13.52l1.922-5.481-.944-.331-1.922 5.48.944.332zm-12.84-5.481l1.922 5.48.944-.33-1.922-5.481-.944.33zM15.5 11.42v4.385h1V11.42h-1zm.228 4.804l2.909 1.888.544-.84-2.909-1.887-.544.839z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TimeWatch =
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
export default TimeWatch;
