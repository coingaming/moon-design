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
      d="M13.23 21.646a.5.5 0 100 1v-1zm11.77 1a.5.5 0 000-1v1zm-11.77-7.23a.5.5 0 100 1v-1zm11.77 1a.5.5 0 100-1v1zM13.23 9.184a.5.5 0 100 1v-1zm11.77 1a.5.5 0 000-1v1zm-15.73-.5a.885.885 0 01-.885.884v1c1.04 0 1.884-.844 1.884-1.884h-1zm-.885.884a.885.885 0 01-.885-.884h-1c0 1.04.844 1.884 1.885 1.884v-1zM7.5 9.685c0-.489.396-.885.885-.885v-1C7.344 7.8 6.5 8.644 6.5 9.685h1zm.885-.885c.488 0 .884.396.884.885h1c0-1.041-.844-1.885-1.884-1.885v1zm.884 7.115a.885.885 0 01-.884.885v1c1.04 0 1.884-.844 1.884-1.885h-1zm-.884.885a.885.885 0 01-.885-.885h-1c0 1.041.844 1.885 1.885 1.885v-1zm-.885-.885c0-.488.396-.884.885-.884v-1c-1.041 0-1.885.844-1.885 1.884h1zm.885-.884c.488 0 .884.396.884.884h1c0-1.04-.844-1.884-1.884-1.884v1zm.884 7.115a.885.885 0 01-.884.885v1c1.04 0 1.884-.844 1.884-1.885h-1zm-.884.885a.885.885 0 01-.885-.885h-1c0 1.041.844 1.885 1.885 1.885v-1zm-.885-.885c0-.488.396-.884.885-.884v-1c-1.041 0-1.885.843-1.885 1.884h1zm.885-.884c.488 0 .884.396.884.884h1c0-1.04-.844-1.884-1.884-1.884v1zm4.846 1.384H25v-1H13.23v1zm0-6.23H25v-1H13.23v1zm0-6.231H25v-1H13.23v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TextBulletsList =
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
export default TextBulletsList;
