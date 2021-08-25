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
      d="M16 6.5c1.21 0 2.192.982 2.192 2.192 0 .2.13.374.317.442.194.071.385.15.57.237.182.084.397.052.538-.089a2.192 2.192 0 113.1 3.1.475.475 0 00-.088.538c.087.186.166.377.237.57a.475.475 0 00.442.318 2.192 2.192 0 110 4.384c-.2 0-.374.13-.442.317-.071.194-.15.385-.237.57a.475.475 0 00.088.538 2.192 2.192 0 11-3.1 3.1.475.475 0 00-.537-.088 7.287 7.287 0 01-.57.237.475.475 0 00-.318.442 2.192 2.192 0 11-4.384 0c0-.2-.13-.374-.317-.442a7.269 7.269 0 01-.57-.237.475.475 0 00-.538.088 2.192 2.192 0 11-3.1-3.1.475.475 0 00.088-.537 7.279 7.279 0 01-.237-.57.475.475 0 00-.442-.318 2.192 2.192 0 110-4.384c.2 0 .374-.13.442-.317a7.26 7.26 0 01.237-.57.475.475 0 00-.089-.538 2.192 2.192 0 013.1-3.1c.142.14.357.172.538.088.186-.087.377-.166.57-.237a.475.475 0 00.318-.442c0-1.21.981-2.192 2.192-2.192z"
      stroke="currentColor"
    />
    <path
      d="M20.222 16a4.222 4.222 0 11-8.444 0 4.222 4.222 0 018.444 0z"
      stroke="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericSettings =
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
export default GenericSettings;
